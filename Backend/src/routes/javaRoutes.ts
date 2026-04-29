import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controller/javaController";

const jrouter = express.Router();

jrouter.post("/", createJob);
jrouter.get("/", getJobs);
jrouter.get("/:id", getJobById);
jrouter.put("/:id", updateJob);
jrouter.delete("/:id", deleteJob);

export default jrouter;