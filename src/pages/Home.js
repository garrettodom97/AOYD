import "./Home.css";
import Header from "../components/Header";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Downfall from "../components/Downfall";
import Tools from "../components/Tools";
import Album from "../components/Album";
import Disclaimer from "../components/Disclaimer";
import React, { Suspense } from "react";
const SpotifyEmbed = React.lazy(() => import("../components/SpotifyEmbed"));

function Home() {
  return (
    <div className="Home">
      <Downfall />
      <Album />
      <Suspense fallback={<div>Loading...</div>}>
        <SpotifyEmbed />
      </Suspense>
      <Schedule />
      <Tools />
      <Footer />
    </div>
  );
}

export default Home;
