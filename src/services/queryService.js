import { PAGE_SIZE, MAX_PAGE_SIZE } from "../utils/constants";
import getCamelCase from "../utils/getCamelCase";

class QueryService {
  static getMatchFromQuery(query = "") {
    let match = {};

    if (query["title"]) {
      match.$text = { $search: `\"${query["title"]}\"` };
    }

    if (query["year"]) {
      match.year = { $in: [Number(query["year"])] };
    }

    if (query["genres"]) {
      const genres = query["genres"]
        .split(",")
        .map(genre => getCamelCase(genre));

      match.genres = { $in: genres };
    }

    return match;
  }

  static getSortFromQuery(query) {
    let sort = { year: 1 };

    if (query["sort"] === "newest") {
      sort = { year: -1 };
    }

    if (query["sort"] === "most_voted") {
      sort = { "rating.votes": -1 };
    }

    if (query["sort"] === "top_rated") {
      sort = { "rating.value": -1 };
    }

    return query["title"]
      ? {
          ...sort,
          score: { $meta: "textScore" }
        }
      : sort;
  }

  static getLimitFromQuery({ page_size }) {
    if (Number(page_size) > MAX_PAGE_SIZE) {
      return MAX_PAGE_SIZE;
    }

    return Number(page_size) || PAGE_SIZE;
  }

  static getSkipFromQuery({ page }) {
    return Number(page) * PAGE_SIZE - PAGE_SIZE || 0;
  }
}

export default QueryService;
