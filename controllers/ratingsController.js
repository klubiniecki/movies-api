import getFiltersFromQuery from "../utils/getFiltersFromQuery";
import Movie from "../models/movie";
import getAverageRatingsFromMovies from "../utils/getAverageRatingsFromMovies";

class RatingsController {
  static async getBestRatedYears(_, res) {
    try {
      const FIELDS = "year imdb.rating";
      const movies = await Movie.find(getFiltersFromQuery(), FIELDS);

      res.json(
        getAverageRatingsFromMovies(movies).sort((a, b) => b.rating - a.rating)
      );
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default RatingsController;
