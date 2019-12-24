import mongoose from "mongoose";
import { ObjectId } from "../api/db";

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
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
