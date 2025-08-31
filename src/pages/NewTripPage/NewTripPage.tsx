import React from "react";
import "./NewTripPage.css";
import Mapsamp from "../../components/Mapsamp/Mapsamp";
import Header from "../../components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* Map as background */}
      <div className="map-background">
        <Mapsamp />
      </div>

      {/* Overlay form */}
      <div className="overlay-form">
        <Header />
      </div>
    </div>
  );
}

export default App;
