import getFilters from "./getFilters";

describe("getFilters", () => {
  const filters = {
    year: { $lt: 2000 },
    genres: { $in: ["Fantasy", "Sci-Fi"] },
    poster: { $exists: true }
  };

  test("returns correct filters for year query", () => {
    expect(getFilters({ year: 1984 })).toEqual({
      ...filters,
      year: { $in: 1984 }
    });
  });

  test("returns correct filters for genre query", () => {
    expect(getFilters({ genre: "fantasy" })).toEqual({
      ...filters,
      genres: { $in: ["Fantasy"] }
    });
  });

  test("returns correct filters with no query", () => {
    expect(getFilters()).toEqual(filters);
  });
});
