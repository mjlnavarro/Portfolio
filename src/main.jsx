import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/Landing.css";

function Landing({ onFadeOut }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setIsFading(true);
      setTimeout(() => {
        onFadeOut();
      }, 800);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [onFadeOut]);

  return (
    <div className={`landing-container ${isFading ? "fade-out" : ""}`}>
      <div className="background-text">HELLO</div>
      <div className="center-box">
        <h1>JIN LAURENCE F. NAVARRO</h1>
        <p>COMPUTER ENGINEERING STUDENT</p>
      </div>
    </div>
  );
}

function Root() {
  const [hasClicked, setHasClicked] = useState(false);
  return hasClicked ? <App /> : <Landing onFadeOut={() => setHasClicked(true)} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <Root />
);