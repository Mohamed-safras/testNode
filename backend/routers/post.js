const express = require("express");

const postRoute = express.Router();
const postSchema = require("../models/Post");

postRoute.post("/", async (req, res) => {
  try {
    const posts = new postSchema({
      title: req.body.title,
      desc: req.body.desc,
      likes: req.body.likes,
      Comment: req.body.Comment,
      postSrc: req.body.postSrc,
    });
    const post = await posts.save().then((data) => {
      res.status(200).json(data);
    });
    return post;
  } catch (error) {
    res.status(401).json({ message: error });
  }
});
postRoute.get("/", async (req, res) => {
  try {
    const post = await postSchema.find(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

postRoute.delete("/:_id", async (req, res) => {
  try {
    const postDelete = await postSchema.remove({ _id: req.params._id });

    res.json(postDelete);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = postRoute;
