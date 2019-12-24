import express from "express";
import MovieController from "../controllers/movieController";
import MovieWithCommentsController from "../controllers/movieWithCommentsController";
import RatingsController from "../controllers/ratingsController";

const router = express.Router();

// GET Movies
router.get("/", MovieController.getMovies);
router.get("/withrating", MovieController.getMoviesWithRating);
router.get("/withcomments", MovieWithCommentsController.getMoviesWithComments);

// GET Ratings
router.get("/bestyears", RatingsController.getBestRatedYears);

// GET Single movie by id
router.get("/:id", MovieController.getMovieById);

// POST Single movie
router.post("/", MovieController.addMovie);

// DELETE Single movie by id
router.delete("/:id", MovieController.deleteMovie);

export default router;
