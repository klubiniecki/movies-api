import { MOVIE_GENRES } from "./constants";
import getCamelCase from "./getCamelCase";

/**
 * @param {string} genres
 */
const isValidMovieGenre = genres =>
  genres
    .split(",")
    .map(genre => getCamelCase(genre))
    .every(genre => MOVIE_GENRES.indexOf(genre) >= 0);

export default isValidMovieGenre;
