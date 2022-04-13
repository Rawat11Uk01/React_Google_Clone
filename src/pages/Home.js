import React from "react";
import "./Home.css";
import Search from "../componets/Search";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";

import { Avatar } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home-headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>

          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt="google logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
