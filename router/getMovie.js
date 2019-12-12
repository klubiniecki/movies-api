import { FIELDS } from "../utils/constants";
import Movie from "../models/movie";

const getMovie = async ({ params }, res) => {
  try {
    const movies = await Movie.findById(params.id, FIELDS);

    if (!movies) {
      res.json({ message: `No movie found for id: ${params.id}!` });
    }

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getMovie;
