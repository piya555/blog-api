import mongoose, { Document, Schema } from "mongoose";

export interface IPage extends Document {
  title: string;
  slug: string;
  content: string;
  isPublished: boolean;
  thumbnail?: string;
}

const PageSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
    thumbnail: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IPage>("Page", PageSchema);
