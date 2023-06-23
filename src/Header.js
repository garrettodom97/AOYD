import React from "react";
import "./Header.css";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <div className="header">
      <div className="icons">
        <SocialIcon className="icon" url="https://open.spotify.com/artist/39THmh6GSMEKvXv2yO8SMc" />
        <SocialIcon className="icon" url="https://www.instagram.com/authorofyourdownfall/" bgColor="#E1306C" />
      </div>
      <h1>Author of Your Downfall</h1>
      <div className="icons">
        <SocialIcon className="icon" url="https://www.tiktok.com/@authorofyourdownfall" bgColor="#FFFFFF"/>
        <SocialIcon className="icon" url="https://www.youtube.com/@authorofyourdownfall" />
      </div>
    </div>
  );
}

export default Header;
