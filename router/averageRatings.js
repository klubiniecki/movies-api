import express from "express";
import averageRatings from "../controllers/averageRatings";

const router = express.Router();
router.get("/", averageRatings);

export default router;
