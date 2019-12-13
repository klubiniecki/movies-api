import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
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
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  }
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
