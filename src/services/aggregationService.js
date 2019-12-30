import { ObjectId } from "../database/dbInit";
import QueryService from "./queryService";

const DB_PROJECT_MOVIE = {
  title: "$title",
  year: "$year",
  genres: "$genres",
  posterUrl: "$posterUrl",
  rating: {
    value: "$rating.value",
    votes: "$rating.votes"
  }
};
const DB_PROJECT_MOVIE_DETAILS = {
  ...DB_PROJECT_MOVIE,
  cast: "$cast",
  runtime: "$runtime",
  plot: "$plot"
};
const DB_PROJECT_COMMENT = {
  name: "$name",
  email: "$email",
  text: "$text",
  date: "$date",
  movieId: "$movie_id"
};

const {
  getMatchFromQuery,
  getLimitFromQuery,
  getSkipFromQuery,
  getSortFromQuery
} = QueryService;

class AggregationService {
  static getMoviePipelineFromQuery(query) {
    return [
      {
        $match: getMatchFromQuery(query)
      },
      {
        $sort: getSortFromQuery(query)
      },
      { $skip: getSkipFromQuery(query) },
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
      { $sort: { date: -1 } },
      { $project: DB_PROJECT_COMMENT }
    ];
  }
}

export default AggregationService;
