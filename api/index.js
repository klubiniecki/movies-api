import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "../router";
import dbInit from "./db";

dotenv.config();
dbInit();

const app = express();
app.on("error", err => console.error("Server error:", err));
app.use(cors());
app.use(bodyParser.json());
app.use("/", router);
app.listen(process.env.PORT, () => console.log(`Port: ${process.env.PORT}`));

export default app;
