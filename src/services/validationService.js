import { MOVIE_GENRES } from "../utils/constants";
import isValidMovieGenre from "../utils/isValidMovieGenre";

class ValidationService {
  static queryValidator(query) {
    let status = 404;
    let message = "No movies found.";
    let invalidQuery = false;
    const date = new Date();

    if (query["year"] && Number(query["year"]) > date.getFullYear()) {
      status = 400;
      message = `No movies from the future found!`;
      invalidQuery = true;
    }

    if (query["genres"] && isValidMovieGenre(query["genres"])) {
      status = 400;
      message = `No movies found for genre: ${query["genres"]}. Please choose one or more of: ${MOVIE_GENRES}.`;
      invalidQuery = true;
    }

    return { status, message, invalidQuery };
  }
}

export default ValidationService;
