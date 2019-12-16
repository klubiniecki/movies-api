import express from "express";
import movie from "../controllers/movie";

const router = express.Router();
router.get("/", movie);

export default router;
