import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import App from "./App";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Main;