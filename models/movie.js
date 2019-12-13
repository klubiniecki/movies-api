import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genres: {
    type: Array,
    required: true
  },
  fullplot: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  imdb: {
    type: Object,
    required: true
  },
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  }
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
