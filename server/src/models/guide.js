const mongoose = require("../database");

const GuideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  comments: [
    {
      name: String,
      comment: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Guide = mongoose.model("Guide", GuideSchema);

module.exports = Guide;
