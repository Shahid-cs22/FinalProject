import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controller/writerController";

const writerRouter = express.Router();

writerRouter.post("/", createJob);
writerRouter.get("/", getJobs);
writerRouter.get("/:id", getJobById);
writerRouter.put("/:id", updateJob);
writerRouter.delete("/:id", deleteJob);

export default writerRouter;