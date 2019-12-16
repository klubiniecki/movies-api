import express from "express";
import movies from "./movies";
import averageRatings from "./averageRatings";
import ratedMovies from "./ratedMovies";
import moviesWithComments from "./moviesWithComments";
import movie from "./movie";

const router = express.Router();

router.use("/", movies);
router.use("/bestyears", averageRatings);
router.use("/rated", ratedMovies);
router.use("/withcomments", moviesWithComments);
router.use("/:id", movie);

export default router;
