import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NewTripPage from "./pages/NewTripPage/NewTripPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-trip" element={<NewTripPage />} />
      </Routes>
    </Router>
  );
};

export default App;
