import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";
import { ReactComponent as More } from "../src/images/more.svg";
import { ReactComponent as Verified } from "../src/images/verified.svg";
import { ReactComponent as Like } from "../src/images/likes.svg";
import { ReactComponent as Reply } from "../src/images/reply.svg";
import { ReactComponent as Shere } from "../src/images/shere.svg";
import { ReactComponent as Retweet } from "../src/images/retweet.svg";
const Post = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/post");
      const post = await data.json();
      setPost(post);
    };
    fetchData();
  }, []);
  return (
    <div>
      {post.map((items) => {
        <div className="post">
          <div className="postHeader">
            <div className="postHeaderLeft">
              <div className="postHeaderAvatar">
                <Avatar />
              </div>
              <div className="postHeadertitle">
                <div className="postHeadertitleHeader">
                  <h3>{items.title}</h3>
                  <Verified className="icons" />
                  <p></p>
                  <p>2h</p>
                </div>
                <div className="postHeadertitleDesc">
                  <p>sjkdhjkscsjshjkhs</p>
                </div>
              </div>
            </div>
            <div className="postHeaderMore">
              <More style={{ fill: "black" }} className="icons" />
            </div>
          </div>
          <div className="postMiddel">
            <p>gets the West Indies home in the series decider.</p>
            <img
              className="image"
              alt=""
              src="https://pbs.twimg.com/media/Ev632t5WgAANtpc?format=jpg&name=small"
            />
          </div>
          <div className="postFooter">
            <div className="postFooterIcons">
              <div className="postFooterIcon">
                <Reply style={{ fill: "black" }} className="icons" />
                <span>9</span>
              </div>
              <div className="postFooterIcon">
                <Retweet style={{ fill: "black" }} className="icons" />
                <span>9</span>
              </div>
              <div className="postFooterIcon">
                <Like style={{ fill: "black" }} className="icons" />
                <span>9</span>
              </div>
              <div className="postFooterIcon">
                <Shere style={{ fill: "black" }} className="icons" />
              </div>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Post;
