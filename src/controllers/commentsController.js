import Comment from "../models/comment";
import { ObjectId } from "../database/dbInit";
import AggregationService from "../services/aggregationService";

class CommentsController {
  static async getCommentsByMovieId({ params }, res) {
    try {
      const { id } = params;
      const comments = await Comment.aggregate(
        AggregationService.getCommentPipelineFromMovieId(id)
      );

      if (comments.length < 1) {
        res
          .status(404)
          .json({ message: `No comments found for movie_id: ${id}!` });
      }

      res.json(comments);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getComment({ params }, res) {
    try {
      const { id } = params;
      const resultsArray = await Comment.aggregate(
        AggregationService.getCommentPipelineFromId(id)
      );
      const comment = resultsArray[0];

      if (!comment) {
        res.status(404).json({ message: `No comments found for id: ${id}!` });
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
      res.status(500).json({ message: err.message });
    }
  }

  static async updateComment({ params, body }, res) {
    try {
      const { id } = params;
      const comment = await Comment.findByIdAndUpdate(ObjectId(id), body, {
        new: true,
        runValidators: true
      });

      res.status(200).json(comment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async deleteComment({ params }, res) {
    try {
      const { id } = params;
      const comment = await Comment.findByIdAndDelete(ObjectId(id));

      res.status(200).json({
        message: `${comment.deletedCount} comment deleted with id: ${id}.`
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default CommentsController;
