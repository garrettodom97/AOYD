import "./Home.css";
import Header from "../components/Header";
import SpotifyEmbed from "../components/SpotifyEmbed";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Downfall from "../components/Downfall";
import Tools from "../components/Tools";
import Album from "../components/Album";
import Disclaimer from "../components/Disclaimer";

function Home() {
  return (
    <div className="Home">
      <Disclaimer />
      <Downfall />
      <Album />
      <SpotifyEmbed />
      <Schedule />
      <Tools />
      <Footer />
    </div>
  );
}

export default Home;
