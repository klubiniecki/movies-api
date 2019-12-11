/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "../routes/movies";

dotenv.config();
const app = express();
const db = mongoose.connection;
const { DB_URL, PORT } = process.env;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on("error", (err): any => console.error("Database error:", err));
db.once("open", (): any => console.log("Database connected"));

app.on("error", (err): any => console.error("Server error:", err));
app.use("/", cors(), router);
app.listen(PORT, (): any => console.log(`Listening on port: ${PORT}`));

export default app;
