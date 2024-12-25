import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: String, require },
  owner: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
  video: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "Video" },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Commnet = mongoose.model("Comment", commentSchema);

export default Commnet;
