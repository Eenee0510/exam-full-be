const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../models/Post");

router.get("/myposts", (req, res) => {
  Post.find({}, function (err, data) {
    if (err) next;
    res.json(data);
  });
});

router.delete("/posts/:id", (req, res) => {
  console.log(req.params.id);
  Post.findOneAndRemove({ _id: req.params.id }, function (err, data) {
    if (err) next;
    // res.json(data);
    res.send("deleted");
  });
});

router.post("/posts", (req, res) => {
  const reqBody = req.body;
  let newPost = new Post({
    _id: mongoose.Types.ObjectId(),
    title: reqBody.title,
    description: reqBody.description,
    image: reqBody.image,
    date: reqBody.date,
  });
  newPost
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});
module.exports = router;
