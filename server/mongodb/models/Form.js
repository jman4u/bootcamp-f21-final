import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;

const FormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cat: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default mongoose.models.Form ?? mongoose.model("Form", FormSchema);
