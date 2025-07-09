import React, { useState, useEffect } from "react";
import "../styles/Landing.css";

function Landing({ onEnter }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = (e) => {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    setFadeOut(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`landing-container ${fadeOut ? "fade-out" : ""}`}
      onClick={handleClick}
    >
      <div className="animated-background" />
      <div className="background-text">Hello</div>
      <div className="center-box">
        <h1 className="landing-title">JIN LAURENCE F. NAVARRO</h1>
        <p className="landing-subtitle">COMPUTER ENGINEERING STUDENT</p>
      </div>
    </div>
  );
}

export default Landing;