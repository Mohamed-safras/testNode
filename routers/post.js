const express = require("express");

const postRoute = express.Router();
const postSchema = require("../models/Post");
postRoute.get("/post", (req, res) => {
  res.send("sdsds");
});

postRoute.post("/post", async (req, res) => {
  try {
    const posts = new postSchema({
      title: req.body.title,
      desc: req.body.desc,
      likes: req.body.likes,
      Comment: req.body.Comment,
    });
    const post = await posts.save().then((data) => {
      res.status(200).json(data);
      return post;
    });
  } catch (error) {
    res.status(401).json({ message: error });
  }
});

module.exports = postRoute;
