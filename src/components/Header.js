import { React, useEffect, useState, useCallback } from "react";
import "./Header.css";
import { SocialIcon } from "react-social-icons";
import RainbowText from "react-rainbow-text";

const names = [
  "Your",
  "Our",
  "Joe's",
  "His",
  "Her",
  "Their",
];

function Header() {
  const [newName, setnewName] = useState("Your");

  const selectName = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(selectName, 2000);
    return () => clearInterval(intervalID);
  }, [selectName]);

  return (
    <div className="header">
      <div className="icons">
        <SocialIcon
          className="icon"
          url="https://open.spotify.com/artist/39THmh6GSMEKvXv2yO8SMc"
        />
        <SocialIcon
          className="icon"
          url="https://www.instagram.com/authorofyourdownfall/"
          bgColor="#E1306C"
        />
      </div>
      <h1>Author of </h1>
      <div className="rainbow-text">
        {newName === "Your" ? (
          <p>Your</p>
        ) : (
          <RainbowText lightness={0.75}>{newName}</RainbowText>
        )}
      </div>
      <h1> Downfall</h1>
      <div className="icons">
        <SocialIcon
          className="icon"
          url="https://www.tiktok.com/@authorofyourdownfall"
          bgColor="#FFFFFF"
        />
        <SocialIcon
          className="icon"
          url="https://www.youtube.com/@authorofyourdownfall"
        />
      </div>
    </div>
  );
}

export default Header;
