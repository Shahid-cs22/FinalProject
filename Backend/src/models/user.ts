import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  heading: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  heading: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default mongoose.model<IUser>("User", userSchema);