import mongoose from "mongoose";

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
      type: Array,
      required: true
    },
    cast: {
      type: Array,
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
    poster: {
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
