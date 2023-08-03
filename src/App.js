import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DownfallInfo from "./pages/DownfallInfo";
import Gear from "./pages/Gear";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
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
