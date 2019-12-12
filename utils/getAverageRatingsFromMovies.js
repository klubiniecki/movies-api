const getAverageRatingsFromMovies = movies => {
  const years = Array.from(new Set(movies.map(m => m.year)));

  return years.map(year => {
    const moviesInYear = movies.filter(r => r.year === year);

    const sumOfRatingsInYear = moviesInYear
      .map(m => m.imdb.rating)
      .reduce((a, b) => a + b);

    const rating = Number(
      (sumOfRatingsInYear / moviesInYear.length).toFixed(1)
    );

    return { year, rating };
  });
};

export default getAverageRatingsFromMovies;
