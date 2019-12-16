import { FIELDS } from "../utils/constants";
import getFiltersFromQuery from "../utils/getFiltersFromQuery";
import Movie from "../models/movie";
import Comment from "../models/comment";
import getMoviesWithComments from "../utils/getMoviesWithComments";

const moviesWithComments = async ({ query }, res) => {
  try {
    const movies = await Movie.find(getFiltersFromQuery(query), FIELDS).sort({
      year: "asc"
    });

    if (movies.length < 1) {
      res.json({ message: `No movies found for year: ${query["year"]}!` });
    }

    const comments = await Comment.find({
      movie_id: movies.map(movie => movie._id)
    });

    res.json(getMoviesWithComments(movies, comments));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default moviesWithComments;
