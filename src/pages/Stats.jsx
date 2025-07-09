import { useEffect, useState } from "react";
import "../styles/stats.css";

function Stats() {
  const [secondsAlive, setSecondsAlive] = useState(0);

  // 🎯 Your birthdate: June 15, 2003 at 3:00 PM
  const birthdate = new Date("2003-06-15T15:00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diffMs = now - birthdate;
      setSecondsAlive(Math.floor(diffMs / 1000));
    };

    updateTime(); // initial run
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section" data-aos="fade-up">
      <div className="stat-box">
        <h3>22</h3>
        <p>Years Alive</p>
      </div>
      <div className="stat-box">
        <h3>{secondsAlive.toLocaleString()}</h3>
        <p>Seconds Alive</p>
      </div>
    </section>
  );
}

export default Stats;