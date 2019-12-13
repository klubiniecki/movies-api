import express from "express";
import movies from "./movies";
import averageRatings from "./averageRatings";
import ratedMovies from "./ratedMovies";
import moviesWithComments from "./moviesWithComments";
import movie from "./movie";

const router = express.Router();

router.get("/", movies);
router.get("/bestyears", averageRatings);
router.get("/rated", ratedMovies);
router.get("/withcomments", moviesWithComments);
router.get("/:id", movie);

export default router;
