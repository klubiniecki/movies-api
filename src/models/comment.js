import mongoose from "mongoose";
import { ObjectId } from "../database/dbInit";

const date = new Date().toISOString();

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: date
    },
    movie_id: {
      type: ObjectId,
      required: true
    }
  },
  {
    versionKey: false
  }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
