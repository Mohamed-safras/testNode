import React from "react";
import "./Home.css";
import Avatar from "@material-ui/core/Avatar";
import { ReactComponent as Image } from "../src/images/image.svg";
import { ReactComponent as Emogi } from "../src/images/emogi.svg";
import { ReactComponent as Gif } from "../src/images/gif.svg";
import { ReactComponent as Poll } from "../src/images/graph.svg";
import { ReactComponent as Shedule } from "../src/images/shedule.svg";
import { ReactComponent as TopTweet } from "../src/images/TopTweet.svg";
import Posts from "./Posts";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <h3>Home</h3>
        <TopTweet className="icon" />
      </div>
      <div className="homeProfile">
        <div className="homeProfileHeader">
          <Avatar />
          <input type="text" placeholder="What's happening?" />
        </div>
        <div className="homeProfileBottom">
          <div className="homeProfileBottomIcon">
            <Image className="icon" />
            <Gif className="icon" />
            <Poll className="icon" />
            <Emogi className="icon" />
            <Shedule className="icon" />
          </div>
          <div className="homeProfileBottomButton">
            <button>Tweeet</button>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Home;
