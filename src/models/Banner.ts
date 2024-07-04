import mongoose, { Document, Schema } from "mongoose";

export interface IBanner extends Document {
  title: string;
  imageUrl: string;
  link?: string;
  isActive: boolean;
}

const BannerSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IBanner>("Banner", BannerSchema);
