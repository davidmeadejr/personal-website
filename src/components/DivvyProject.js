import React from "react";
import "./DivvyProject.css";

function DivvyProject(props) {
  return (
    <a className="divvyContainer" href="https://github.com/davidmeadejr/divvy-app" target="_blank" rel="noreferrer">
      <img className="divvy" src={props.image} alt="Divvy" />
      <div className="text">
        <h3>Divvy</h3>
        <p>
          A mobile app that digitises receipts and enables easy bill splitting when eating out in a group.(
          <a
            href="https://github.com/davidmeadejr/divvy-app/commits?author=davidmeadejr"
            target="_blank"
            rel="noreferrer"
          >
            GIT
          </a>
          )
        </p>
      </div>
    </a>
  );
}
export default DivvyProject;
