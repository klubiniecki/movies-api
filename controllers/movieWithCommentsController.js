import Movie from "../models/movie";
import getAggregationStages from "../utils/getAggregationStages";

class MovieWithCommentsController {
  static async getMoviesWithComments({ query }, res) {
    try {
      const movies = await Movie.aggregate(
        getAggregationStages(query, {
          withRating: false,
          withComments: true
        })
      );

      if (movies.length < 1) {
        res.json({ message: `No movies found for year: ${query.year}!` });
      }

      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default MovieWithCommentsController;
