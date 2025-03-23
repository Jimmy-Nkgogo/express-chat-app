import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("App running at port: " + PORT);
  connectDB();
});
