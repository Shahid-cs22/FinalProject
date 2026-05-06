import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controller/chennaiController";

const chennaiRouter = express.Router();

chennaiRouter.post("/", createJob);
chennaiRouter.get("/", getJobs);
chennaiRouter.get("/:id", getJobById);
chennaiRouter.put("/:id", updateJob);
chennaiRouter.delete("/:id", deleteJob);

export default chennaiRouter;