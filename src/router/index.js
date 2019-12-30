import express from "express";
import MoviesController from "../controllers/moviesController";
import CommentsController from "../controllers/commentsController";

const router = express.Router();

// Movies
const {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie
} = MoviesController;

router.get("/movies", getMovies);
router.get("/movies/:id", getMovie);
router.post("/movies", addMovie);
router.patch("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

// Comments
const {
  getCommentsByMovieId,
  getComment,
  addComment,
  updateComment,
  deleteComment
} = CommentsController;

router.get("/movies/:id/comments", getCommentsByMovieId);
router.get("/comments/:id", getComment);
router.post("/comments", addComment);
router.patch("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

export default router;
