import { Request, Response } from "express";
import Jobs from "../models/jobs"


export const createJob = async (req: Request, res: Response) => {
  try {
    const job = await Jobs.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
};


export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};


export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await Jobs.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job" });
  }
};


export const updateJob = async (req: Request, res: Response) => {
  try {
    const job = await Jobs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error updating job" });
  }
};


export const deleteJob = async (req: Request, res: Response) => {
  try {
    const job = await Jobs.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job" });
  }
};