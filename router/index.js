import express from "express";
import MovieController from "../controllers/movieController";
import MovieWithCommentsController from "../controllers/movieWithCommentsController";
import RatingsController from "../controllers/ratingsController";

const router = express.Router();

// Movies routes
router.get("/", MovieController.getMovies);
router.get("/withrating", MovieController.getMoviesWithRating);
router.get("/withcomments", MovieWithCommentsController.getMoviesWithComments);

// Ratings
router.get("/bestyears", RatingsController.getBestRatedYears);

// Single movie by id
router.get("/:id", MovieController.getMovieById);

export default router;
