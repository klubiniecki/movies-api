import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  value: {
    type: Number,
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
