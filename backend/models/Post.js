const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    default: 0,
    required: false,
  },
  Comment: {
    type: [],
    required: false,
  },
  postSrc: {
    type: String,
    required: false,
  },
});
const model = mongoose.model("Post", PostSchema);
module.exports = model;
