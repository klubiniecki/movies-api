import express from "express";
import Movie from "../models/movie";
import getFilters from "../filters/getFilters";

const router = express.Router();
const fields = "title genres fullplot poster year";

router.get("/", async ({ query }, res) => {
  try {
    const movies = await Movie.find(getFilters(query), fields).sort({
      year: "asc"
    });

    if (movies.length < 1) {
      res.json({ message: `No movies found for year: ${query["year"]}!` });
    }

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async ({ params }, res) => {
  try {
    const movies = await Movie.findById(params.id, fields);

    if (!movies) {
      res.json({ message: `No movie found for id: ${params.id}!` });
    }

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
