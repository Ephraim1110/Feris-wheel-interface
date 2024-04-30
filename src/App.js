import React, { useState } from "react";
import "./App.css";
import ImgHero from "./img/image.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showControls, setShowControls] = useState(false);

  const handleStartClick = () => {
    setShowControls(true);
    startFerrisWheel(); // Appel de la fonction pour démarrer la ferris wheel
  };

  const handleStopClick = () => {
    setShowControls(true);
    stopFerrisWheel(); 
  };

  const startFerrisWheel = async () => {
    try {
      const response = await fetch("http://35.241.255.143:3000/start", { method: "POST" });
      if (!response.ok) {
        throw new Error("Erreur lors du démarrage de la ferris wheel");
      }
      console.log("start!");
    } catch (error) {
      console.error(error);
    }
  };

  const stopFerrisWheel = async () => {
    try {
      const response = await fetch("http://35.241.255.143:3000/stop", { method: "POST" });
      if (!response.ok) {
        throw new Error("Erreur lors de l'arrêt de la ferris wheel");
      }
      console.log("stop");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${ImgHero})` }}>
      <div className="content">
        <h1 className="animation">Welcome to the Space. </h1>
       
        {!showControls && (
          <a href="#" onClick={handleStartClick} className="btn btn-primary">Proceed</a>
        )}
        {showControls && (
          <div className="animation">
            <h1>Ferris Wheel</h1>
            <a href="#" onClick={handleStartClick} className="btn btn-success mr-2">Start</a> 
            <a href="#" onClick={handleStopClick} className="btn btn-danger">Stop</a>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
