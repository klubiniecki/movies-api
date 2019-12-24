import Movie from "../models/movie";
import getAggregationStages from "../utils/getAggregationStages";
import { ObjectId } from "../api/db";

class MovieController {
  // Get all movies
  static async getMovies({ query }, res) {
    try {
      const movies = await Movie.aggregate(
        getAggregationStages(query, {
          withRating: false,
          withComments: false
        })
      );

      if (movies.length < 1) {
        res
          .status(404)
          .json({ message: `No movies found for year: ${query.year}!` });
      }

      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Get all movies with IMDB rating
  static async getMoviesWithRating({ query }, res) {
    try {
      const movies = await Movie.aggregate(
        getAggregationStages(query, {
          withRating: true,
          withComments: false
        })
      );

      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Get movie with provided ID
  static async getMovieById({ params }, res) {
    try {
      const movie = await Movie.aggregate(
        getAggregationStages(
          "",
          {
            withRating: true,
            withComments: false
          },
          params.id
        )
      );

      if (!movie) {
        res.json({ message: `No movie found for id: ${params.id}!` });
      }

      res.json(movie);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Add movie
  static async addMovie({ body }, res) {
    const newMovie = new Movie(body);

    try {
      const movie = await Movie.create(newMovie);
      res.status(201).json(movie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // Delete movie with provided ID
  static async deleteMovie({ params }, res) {
    try {
      const { id } = params;
      const movie = await Movie.deleteOne({ _id: ObjectId(id) });
      res.status(200).json({
        message: `${movie.deletedCount} movie deleted with id: ${id}.`
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default MovieController;
