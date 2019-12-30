import QueryService from "./queryService";

describe("getMatchFromQuery", () => {
  const { getMatchFromQuery } = QueryService;

  test("returns correct match for year query", () => {
    expect(getMatchFromQuery({ year: 1984 })).toEqual({
      year: { $in: [1984] }
    });
  });

  test("returns correct match for genre query", () => {
    expect(getMatchFromQuery({ genres: "fantasy" })).toEqual({
      genres: { $in: ["Fantasy"] }
    });
  });

  test("returns correct match for title query", () => {
    expect(getMatchFromQuery({ title: "hello" })).toEqual({
      $text: { $search: `\"hello\"` }
    });
  });

  test("returns correct match with no query", () => {
    expect(getMatchFromQuery()).toEqual({});
  });
});
