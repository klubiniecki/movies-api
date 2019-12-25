import { ObjectId } from "../api/db";

const DB_PROJECT_MOVIE = {
  title: "$title",
  year: "$year",
  genres: "$genres",
  posterUrl: "$poster"
};
const DB_PROJECT_MOVIE_DETAILS = {
  ...DB_PROJECT_MOVIE,
  cast: "$cast",
  runtime: "$runtime",
  plot: "$plot",
  rating: {
    value: "$imdb.rating",
    votes: "$imdb.votes"
  }
};
const DB_PROJECT_COMMENT = {
  name: "$name",
  email: "$email",
  text: "$text",
  date: "$date",
  movieId: "$movie_id"
};

class DbPipelineBuilder {
  static getMoviePipelineFromQuery(query) {
    return [
      {
        $match: getFiltersFromQuery(query)
      },
      { $limit: getLimitFromQuery(query) },
      { $project: DB_PROJECT_MOVIE }
    ];
  }

  static getMoviePipelineFromId(id) {
    return [
      {
        $match: { _id: ObjectId(id) }
      },
      { $project: DB_PROJECT_MOVIE_DETAILS }
    ];
  }

  static getCommentPipelineFromId(id) {
    return [
      {
        $match: { _id: ObjectId(id) }
      },
      { $project: DB_PROJECT_COMMENT }
    ];
  }

  static getCommentPipelineFromMovieId(id) {
    return [
      {
        $match: { movie_id: ObjectId(id) }
      },
      { $project: DB_PROJECT_COMMENT }
    ];
  }
}

export default DbPipelineBuilder;