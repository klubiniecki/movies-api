import express from "express";
import MoviesController from "../controllers/moviesController";
import CommentsController from "../controllers/commentsController";

const router = express.Router();

// Movies
router.get("/movies", MoviesController.getMovies);
router.get("/movies/:id", MoviesController.getMovie);
router.post("/movies", MoviesController.addMovie);
router.patch("/movies/:id", MoviesController.updateMovie);
router.delete("/movies/:id", MoviesController.deleteMovie);

// Comments
router.get("/movies/:id/comments", CommentsController.getCommentsByMovieId);
router.get("/comments/:id", CommentsController.getComment);
router.post("/comments", CommentsController.addComment);
router.patch("/comments/:id", CommentsController.updateComment);
router.delete("/comments/:id", CommentsController.deleteComment);

export default router;
