import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "../routes/movies";
import dbInit from "./db";

dotenv.config();
dbInit();

const app = express();
app.on("error", err => console.error("Server error:", err));
app.use("/", cors(), router);
app.listen(process.env.PORT, () => console.log(`Port: ${process.env.PORT}`));

export default app;
