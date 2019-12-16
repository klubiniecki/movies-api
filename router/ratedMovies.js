import express from "express";
import ratedMovies from "../controllers/ratedMovies";

const router = express.Router();
router.get("/", ratedMovies);

export default router;
