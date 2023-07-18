import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DownfallInfo from "./pages/DownfallInfo";
import Gear from "./pages/Gear";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header className="App-header" />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="downfall" element={<DownfallInfo />} />
            <Route path="gear" element={<Gear />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
