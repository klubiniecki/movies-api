import express from "express";
import movies from "../controllers/movies";

const router = express.Router();
router.get("/", movies);

export default router;
