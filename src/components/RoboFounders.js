import React from "react";
import "./RoboFounders.css";

function RoboFounders(props) {
  return (
    <a className="roboContainer" href="https://robo-founders.vercel.app/" target="_blank" rel="noreferrer">
      <img className="robo" src={props.image} alt="Robo" />
      <div className="text">
        <h3>Robo Founders</h3>
        <p>
          Explore data on fictional company founders using three deterministic APIs and a founder ID.(
          <a href="https://github.com/davidmeadejr/robo-founders" target="_blank" rel="noreferrer">
            GIT
          </a>
          )
        </p>
      </div>
    </a>
  );
}
export default RoboFounders;
