import { React } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
// import RainbowText from "react-rainbow-text";

// const names = [
//   "Your",
//   "Our",
//   "Joe's",
//   "His",
//   "Her",
//   "Their",
// ];

function Header() {
  // const [newName, setnewName] = useState("Your");

  // const selectName = useCallback(() => {
  //   const index = Math.floor(Math.random() * names.length);
  //   setnewName(names[index]);
  // }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(selectName, 2000);
  //   return () => clearInterval(intervalID);
  // }, [selectName]);

  return (
    <div className="header">
      <div className="icons">
        <SocialIcon
          className="icon"
          fgColor="white"
          url="https://www.instagram.com/authorofyourdownfall/"
          bgColor="#E1306C"
        />
        <SocialIcon
          className="icon"
          network="itunes"
          fgColor="white"
          url="https://music.apple.com/us/artist/author-of-your-downfall/1559096641"
          bgColor="#ff3333"
        />
        <SocialIcon
          className="icon"
          url="https://open.spotify.com/artist/39THmh6GSMEKvXv2yO8SMc"
        />
      </div>
      <h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          Author of Your Downfall
        </Link>
      </h1>
      {/* <div className="rainbow-text">
        {newName === "Your" ? (
          <p>Your</p>
        ) : (
          <RainbowText lightness={0.75}>{newName}</RainbowText>
        )}
      </div> */}
      <div className="icons">
        <SocialIcon
          className="icon"
          fgColor="white"
          url="https://www.youtube.com/@authorofyourdownfall"
        />
        <SocialIcon
          className="icon"
          fgColor="white"
          url="https://www.facebook.com/authorofyourdownfall"
        />
        <SocialIcon
          className="icon"
          url="https://www.tiktok.com/@authorofyourdownfall"
          bgColor="#FFFFFF"
        />
      </div>
    </div>
  );
}

export default Header;
