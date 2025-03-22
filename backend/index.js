import express from "express";
import authRoutes from "./routes/auth.route.js"
import { config } from "dotenv";
import { connectDB } from "./lib/db.js";

config();

const app = express();

const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("App running at port: " + PORT);
    connectDB();
})