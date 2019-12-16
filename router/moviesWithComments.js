import express from "express";
import moviesWithComments from "../controllers/moviesWithComments";

const router = express.Router();
router.get("/", moviesWithComments);

export default router;
