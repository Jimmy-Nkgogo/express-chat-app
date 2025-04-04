import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { connectDB } from "./lib/db.js";

config();

const app = express();

app.use(express.json({ limit: "20mb"}));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("App running at port: " + PORT);
  connectDB();
});
