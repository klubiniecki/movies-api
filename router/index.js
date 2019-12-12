import express from "express";
import getAllMovies from "./getAllMovies";
import getRatedMovies from "./getRatedMovies";
import getMovie from "./getMovie";
import getAverageRatings from "./getAverageRatings";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/rated", getRatedMovies);
router.get("/bestyears", getAverageRatings);
router.get("/:id", getMovie);

export default router;
