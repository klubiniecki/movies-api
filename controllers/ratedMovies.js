import { FIELDS } from "../utils/constants";
import getFiltersFromQuery from "../utils/getFiltersFromQuery";
import Movie from "../models/movie";

const ratedMovies = async ({ query }, res) => {
  try {
    const movies = await Movie.find(getFiltersFromQuery(query), FIELDS)
      .sort({
        "imdb.rating": query && query["worst"] ? "asc" : "desc"
      })
      .limit(Number((query && query["number"]) || 10));

    res.json(
      movies.map(m => ({
        title: m.title,
        fullplot: m.fullplot,
        year: m.year,
        rating: m.imdb.rating
      }))
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default ratedMovies;
