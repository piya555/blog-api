import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: mongoose.Types.ObjectId;
  categories: mongoose.Types.ObjectId[];
  tags: mongoose.Types.ObjectId[];
  isPublished: boolean;
  thumbnail?: string;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    isPublished: { type: Boolean, default: false },
    thumbnail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IPost>("Post", PostSchema);
