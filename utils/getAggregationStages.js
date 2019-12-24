import { ObjectId } from "../api/db";
import getFiltersFromQuery from "./getFiltersFromQuery";
import getLimitFromQuery from "./getLimitFromQuery";

const getAggregationStages = (query, { withRating, withComments }, movieId) => {
  const project = {
    title: "$title",
    genres: "$genres",
    plot: "$plot",
    posterUrl: "$poster",
    year: "$year",
    rating: {
      value: "$imdb.rating",
      votes: "$imdb.votes"
    }
  };

  if (withRating) {
    project.rating = "$imdb.rating";
  }

  const stages = [
    {
      $match: movieId ? { _id: ObjectId(movieId) } : getFiltersFromQuery(query)
    },
    { $limit: getLimitFromQuery(query) },
    { $project: project }
  ];

  if (withComments) {
    stages.push({
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "movie_id",
        as: "comments"
      }
    });
  }

  return stages;
};

export default getAggregationStages;
