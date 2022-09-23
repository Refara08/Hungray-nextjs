import mongoose from "mongoose";
import { Schema } from "mongoose";

const AdminSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
