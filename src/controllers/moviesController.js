import Movie from "../models/movie";
import { ObjectId } from "../database/dbInit";
import AggregationService from "../services/aggregationService";

class MoviesController {
  static async getMovies({ query }, res) {
    try {
      const movies = await Movie.aggregate(
        AggregationService.getMoviePipelineFromQuery(query)
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

  static async getMovie({ params }, res) {
    try {
      const { id } = params;
      const movie = await Movie.aggregate(
        AggregationService.getMoviePipelineFromId(id)
      );

      if (!movie) {
        res.json({ message: `No movie found for id: ${id}!` });
      }

      res.json(movie);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async addMovie({ body }, res) {
    try {
      const newMovie = new Movie(body);
      const movie = await Movie.create(newMovie);

      res.status(201).json(movie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updateMovie({ params, body }, res) {
    try {
      const { id } = params;
      const movie = await Movie.findByIdAndUpdate(ObjectId(id), body, {
        new: true,
        runValidators: true
      });

      res.status(200).json(movie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async deleteMovie({ params }, res) {
    try {
      const { id } = params;
      const movie = await Movie.findByIdAndDelete(ObjectId(id));

      res.status(200).json({
        message: `${movie.deletedCount} movie deleted with id: ${id}.`
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default MoviesController;
