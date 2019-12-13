const getMoviesWithComments = (movies, comments) =>
  movies.map(movie => ({
    movie,
    comments: comments.filter(
      comment => String(comment.movie_id) === String(movie.id)
    )
  }));

export default getMoviesWithComments;
