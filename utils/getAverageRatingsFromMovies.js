const getAverageRatingsFromMovies = movies => {
  const uniqueYears = Array.from(new Set(movies.map(m => m.year)));

  return uniqueYears.map(year => {
    const moviesInYear = movies.filter(m => m.year === year);
    const sumOfRatingsInYear = moviesInYear
      .map(m => m.imdb.rating)
      .reduce((a, b) => a + b, 0);

    return {
      year,
      rating: Number((sumOfRatingsInYear / moviesInYear.length).toFixed(1)),
      numberOfMovies: moviesInYear.length
    };
  });
};

export default getAverageRatingsFromMovies;
