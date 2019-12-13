import getMoviesWithComments from "./getMoviesWithComments";

describe("getMoviesWithComments", () => {
  const movies = [
    {
      title: "one",
      id: "one1"
    },
    {
      title: "two",
      id: "one2"
    }
  ];

  const comments = [
    { movie_id: "one1", text: "hello one" },
    { movie_id: "one2", text: "hello two" }
  ];

  const result = [
    {
      movie: movies[0],
      comments: [comments[0]]
    },
    {
      movie: movies[1],
      comments: [comments[1]]
    }
  ];

  test("returns correct movie / comments array", () => {
    expect(getMoviesWithComments(movies, comments)).toEqual(result);
  });
});
