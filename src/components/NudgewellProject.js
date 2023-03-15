import React from "react";
import "./NudgewellProject.css";

function NudgewellProject(props) {
  return (
    <div className="container">
      <img className="nudgewell" src={props.image} alt="NudgeWell" />
      <div className="text">
        <h3>NudgeWell (2022 Google Project Data Hack Winner)</h3>
        <p>
          A money-saving & wellness proof-of-concept to combat the cost of living crisis for house sharers.(
          <a href="https://github.com/">GIT</a>)
        </p>
      </div>
    </div>
  );
}
export default NudgewellProject;
