const getFiltersFromQuery = query => {
  let filters = {
    year: { $lt: 2000 },
    genres: { $in: ["Fantasy", "Sci-Fi"] },
    poster: { $exists: true }
  };

  if (!query) {
    return filters;
  }

  if (query["year"]) {
    filters.year = { $in: query["year"] };
  }
  if (query["genre"] === "fantasy") {
    filters.genres = { $in: ["Fantasy"] };
  }
  if (query["genre"] === "sci-fi") {
    filters.genres = { $in: ["Sci-Fi"] };
  }

  return filters;
};

export default getFiltersFromQuery;
