import Comment from "../models/comment";
import { ObjectId } from "../api/db";
import DbPipelineBuilder from "../utils/dbPipelineBuilder";

class CommentsController {
  static async getCommentsByMovieId({ params }, res) {
    try {
      const { id } = params;
      const comments = await Comment.aggregate(
        DbPipelineBuilder.getCommentPipelineFromMovieId(id)
      );

      if (!comments) {
        res.json({ message: `No comments found for id: ${id}!` });
      }

      res.json(comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getComment({ params }, res) {
    try {
      const { id } = params;
      const comment = await Comment.aggregate(
        DbPipelineBuilder.getCommentPipelineFromId(id)
      );

      if (!comment) {
        res.json({ message: `No comment found for id: ${id}!` });
      }

      res.json(comment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async addComment({ body }, res) {
    try {
      const comment = new Comment(body);
      const newComment = await Comment.create(comment);

      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async deleteComment({ params }, res) {
    try {
      const { id } = params;
      const comment = await Comment.deleteOne({ _id: ObjectId(id) });

      res.status(200).json({
        message: `${comment.deletedCount} comment deleted with id: ${id}.`
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default CommentsController;
