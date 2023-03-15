import React from "react";
import "./RoboFounders.css";

function RoboFounders(props) {
  return (
    <div className="roboContainer">
      <img className="robo" src={props.image} alt="Robo" />
      <div className="text">
        <h3>Robo Founders</h3>
        <p>
          Explore data on fictional company founders using three deterministic APIs and a founder ID.(
          <a href="https://github.com/davidmeadejr/divvy-app" target="_blank" rel="noreferrer">
            GIT
          </a>
          )
        </p>
      </div>
    </div>
  );
}
export default RoboFounders;
