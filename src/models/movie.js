import mongoose from "mongoose";
import { MOVIE_GENRES } from "../utils/constants";

const date = new Date();

const ratingSchema = new mongoose.Schema({
  value: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  votes: {
    type: Number,
    required: true
  }
});

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      max: date.getFullYear(),
      required: true
    },
    genres: {
      type: [
        {
          type: String,
          enum: MOVIE_GENRES,
          required: true
        }
      ],
      required: true
    },
    runtime: {
      type: Number,
      min: 1,
      required: true
    },
    cast: {
      type: [
        {
          type: String,
          required: true
        }
      ],
      required: true
    },
    plot: {
      type: String,
      required: true
    },
    rating: {
      type: ratingSchema,
      required: true
    },
    posterUrl: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
