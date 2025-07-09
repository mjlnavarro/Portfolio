import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./pages/Landing";
import "./styles/global.css";

function Root() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
    const mainSection = document.getElementById("main");
    if (mainSection) {
      setTimeout(() => {
        mainSection.scrollIntoView({ behavior: "smooth" });
      }, 600); // match swipe-up animation duration
    }
  };

  return (
    <>
      <Landing onEnter={handleEnter} />
      <App />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);