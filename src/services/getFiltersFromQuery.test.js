import QueryService from "./queryService";

describe("getFilters", () => {
  const filters = {
    posterUrl: { $exists: true }
  };

  test("returns correct filters for year query", () => {
    expect(QueryService.getFiltersFromQuery({ year: 1984 })).toEqual({
      ...filters,
      year: { $in: [1984] }
    });
  });

  test("returns correct filters for genre query", () => {
    expect(QueryService.getFiltersFromQuery({ genres: "fantasy" })).toEqual({
      ...filters,
      genres: { $in: ["Fantasy"] }
    });
  });

  test("returns correct filters with no query", () => {
    expect(QueryService.getFiltersFromQuery()).toEqual(filters);
  });
});
