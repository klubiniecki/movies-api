import express from "express";
import Movie from "../models/movie";
import getFilters from "../filters/getFilters";

const router = express.Router();

router.get("/", async ({ query }, res) => {
  try {
    const fields = "title genres fullplot poster year";
    const movies = await Movie.find(getFilters(query), fields).sort({
      year: "asc"
    });

    const notFoundMessage = `No movies found for year: ${query["year"]}!`;

    if (movies.length < 1) {
      res.json({ message: notFoundMessage });
    }

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
