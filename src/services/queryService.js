import { PAGE_SIZE, MAX_PAGE_SIZE } from "../utils/constants";
import getCamelCase from "../utils/getCamelCase";

class QueryService {
  static getFiltersFromQuery(query) {
    let filters = {
      posterUrl: { $exists: true }
    };

    if (!query) {
      return filters;
    }

    if (query["year"]) {
      const year = [Number(query["year"])];
      filters.year = { $in: year };
    }

    if (query["genres"]) {
      const genres = query["genres"]
        .split(",")
        .map(genre => getCamelCase(genre));
      filters.genres = { $in: genres };
    }

    return filters;
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
