import { FIELDS } from "../utils/constants";
import Movie from "../models/movie";
import Comment from "../models/comment";

const movie = async ({ params }, res) => {
  try {
    const movie = await Movie.findById(params.id, FIELDS);

    if (!movie) {
      res.json({ message: `No movie found for id: ${params.id}!` });
    }

    const comments = await Comment.find({ movie_id: params.id });

    res.json({ movie, comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default movie;
