/* eslint-disable @typescript-eslint/no-explicit-any */
const getFilters = (query: any): any => {
  const year = query["year"] ? { $in: query["year"] } : { $lt: 2000 };

  let genres = ["Fantasy", "Sci-Fi"];
  if (query["genre"] === "fantasy") {
    genres = ["Fantasy"];
  }
  if (query["genre"] === "sci-fi") {
    genres = ["Sci-Fi"];
  }

  return {
    year,
    genres: { $in: genres },
    poster: { $exists: true }
  };
};

export default getFilters;
