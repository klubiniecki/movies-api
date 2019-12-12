import getFiltersFromQuery from "../utils/getFiltersFromQuery";
import Movie from "../models/movie";
import getAverageRatingsFromMovies from "../utils/getAverageRatingsFromMovies";

const getAverageRatings = async (_, res) => {
  try {
    const fields = "year imdb.rating";
    const movies = await Movie.find(getFiltersFromQuery(), fields);

    res.json(
      getAverageRatingsFromMovies(movies).sort((a, b) => b.rating - a.rating)
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getAverageRatings;
