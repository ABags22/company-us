// src/Router.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./App";
import Project from "./components/pageProject/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
