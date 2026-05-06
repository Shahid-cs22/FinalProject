import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controller/hrController";

const hrRouter = express.Router();

hrRouter.post("/", createJob);
hrRouter.get("/", getJobs);
hrRouter.get("/:id", getJobById);
hrRouter.put("/:id", updateJob);
hrRouter.delete("/:id", deleteJob);

export default hrRouter;