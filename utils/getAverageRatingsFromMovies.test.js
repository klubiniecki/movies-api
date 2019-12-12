import getAverageRatingsFromMovies from "./getAverageRatingsFromMovies";

describe("getAverageRatingsFromMovies", () => {
  const movies = [
    {
      year: 1912,
      imdb: {
        rating: 7
      }
    },
    {
      year: 1912,
      imdb: {
        rating: 8
      }
    },
    {
      year: 1918,
      imdb: {
        rating: 6.6
      }
    },
    {
      year: 1920,
      imdb: {
        rating: 7.1
      }
    },
    {
      year: 1920,
      imdb: {
        rating: 1.8
      }
    }
  ];

  const result = [
    { year: 1912, rating: 7.5 },
    { year: 1918, rating: 6.6 },
    { year: 1920, rating: 4.5 }
  ];

  test("returns correct year / rating array", () => {
    expect(getAverageRatingsFromMovies(movies)).toEqual(result);
  });
});
