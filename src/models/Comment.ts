import mongoose, { Document, Schema } from "mongoose";

export interface IComment extends Document {
  content: string;
  post: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
  isApproved: boolean;
}

const CommentSchema: Schema = new Schema(
  {
    content: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IComment>("Comment", CommentSchema);
