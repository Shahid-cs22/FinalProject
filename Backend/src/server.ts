import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import jobRoutes from "./routes/jobRoutes";
import cors from "cors";
import jrouter from "./routes/javaRoutes";
import writerRouter from "./routes/writerRouters";
import hrRouter from "./routes/hrRoutes";
import chennaiRouter from "./routes/chennaiRoutes";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API running");
});


// Routes
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/java", jrouter);
app.use("/api/writers", writerRouter);
app.use("/api/hr", hrRouter);
app.use("/api/chennai", chennaiRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});