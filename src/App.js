import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import Resume from "./components/Resume";
import InfoPageSecond from "./pages/InfoPageSecond";
import InfoPageThird from "./pages/InfoPageThird";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/infoPage" exact element={<InfoPage />} />
          <Route path="/Resume" exact element={<Resume />} />
          <Route path="/InfoPageSecond" exact element={<InfoPageSecond />} />
          <Route path="/InfoPageThird" exact element={<InfoPageThird />} />
          <Route path="/FinalPage" exact element={<FinalPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
