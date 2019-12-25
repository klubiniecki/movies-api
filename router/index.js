import express from "express";
import MoviesController from "../controllers/moviesController";
import CommentsController from "../controllers/commentsController";

const router = express.Router();

// Movies
router.get("/movies", MoviesController.getMovies);
router.get("/movies/:id", MoviesController.getMovie);
router.post("/movies", MoviesController.addMovie);
router.delete("/movies/:id", MoviesController.deleteMovie);

// Comments
router.get("/movies/:id/comments", CommentsController.getCommentsByMovieId);
router.get("/comments/:id", CommentsController.getComment);
router.post("/comments", CommentsController.addComment);
router.delete("/comments/:id", CommentsController.deleteComment);

// PATCH Single movie by id
// router.patch("/movies/:id", MoviesController.updateeMovie);
// PATCH Single comment by id
// router.patch("/comments/:id", CommentsController.updateComment);

export default router;
