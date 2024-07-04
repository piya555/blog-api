import mongoose, { Document, Schema } from "mongoose";

export interface IMenuItem extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  url: string;
  order: number;
  parent?: mongoose.Types.ObjectId;
  children?: IMenuItem[];
}

const MenuItemSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    order: { type: Number, default: 0 },
    parent: { type: Schema.Types.ObjectId, ref: "MenuItem" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

MenuItemSchema.virtual("children", {
  ref: "MenuItem",
  localField: "_id",
  foreignField: "parent",
});

const MenuItem = mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);

export default MenuItem;
