import express from "express";
import authRoutes from "./routes/auth.route.js"
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("App running at port: " + PORT)
})