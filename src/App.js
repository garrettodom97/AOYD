import "./App.css";
import Header from "./components/Header";
import SpotifyEmbed from "./components/SpotifyEmbed";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
      <Header />
      <SpotifyEmbed />
      <Schedule />
    </div>
  );
}

export default App;
