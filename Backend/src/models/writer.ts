import mongoose, { Document, Schema } from "mongoose";

export interface IJob extends Document {
  heading: string;
  job_id: string;
  job_title: string;
  location: string;
  employment_type: string;
  work_model: string;
  overview: string;
  job_function: string;
  industry: string;
  specialization: string;
  graduate_courses: string[];
  job_type: string;
  gender: string;
  key_skills: string[];
}

const jobSchema = new Schema<IJob>({
  heading: { type: String, required: true },
  job_id: { type: String, required: true, unique: true },
  job_title: { type: String, required: true },
  location: { type: String, required: true },
  employment_type: { type: String, required: true },
  work_model: { type: String, required: true },
  overview: { type: String, required: true },
  job_function: { type: String, required: true },
  industry: { type: String, required: true },
  specialization: { type: String, required: true },
  graduate_courses: [{ type: String }],
  job_type: { type: String, required: true },
  gender: { type: String, required: true },
  key_skills: [{ type: String }]
});


export default mongoose.models.writer || mongoose.model<IJob>("writer", jobSchema);