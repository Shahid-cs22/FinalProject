import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    job_id: string;
    location: string;
    employee_type: string;
    overview: string;
    jobfunction: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    job_id: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    employee_type: { type: String, required: true },
    overview: { type: String, required: true },
    jobfunction: { type: String, required: true }
});

export default mongoose.model<IUser>("User", userSchema);