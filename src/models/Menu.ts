import mongoose, { Document, Schema } from "mongoose";

export interface IMenuItem extends Document {
  title: string;
  url: string;
  order: number;
  parent?: mongoose.Types.ObjectId;
}

const MenuItemSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    order: { type: Number, default: 0 },
    parent: { type: Schema.Types.ObjectId, ref: "MenuItem" },
  },
  { timestamps: true }
);

export default mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);
