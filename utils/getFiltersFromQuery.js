const getFiltersFromQuery = query => {
  let filters = {
    posterUrl: { $exists: true }
  };

  if (!query) {
    return filters;
  }

  if (query["year"]) {
    filters.year = { $in: [Number(query["year"])] };
  }
  if (query["genre"] === "fantasy") {
    filters.genres = { $in: ["Fantasy"] };
  }
  if (query["genre"] === "sci_fi") {
    filters.genres = { $in: ["Sci-Fi"] };
  }

  return filters;
};

export default getFiltersFromQuery;
