import { FIELDS } from "../utils/constants";
import getFiltersFromQuery from "../utils/getFiltersFromQuery";
import Movie from "../models/movie";

const movies = async ({ query }, res) => {
  try {
    const movies = await Movie.find(getFiltersFromQuery(query), FIELDS).sort({
      year: "asc"
    });

    if (movies.length < 1) {
      res.json({ message: `No movies found for year: ${query["year"]}!` });
    }

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default movies;
