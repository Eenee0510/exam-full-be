const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Enter the title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Enter the description"],
    unique: true,
  },
  image: {
    type: String,
    required: [true, "Enter the image"],
    unique: true,
  },
  date: {
    type: String,
    required: [true, "Date"],
    unique: true,
  },
});
module.exports = mongoose.model("Post", PostSchema);
