import "./App.css";
import nudgewell from "./nudgewell.png";
import divvy from "./divvy.png";
import robo from "./roboFounders.png";
import Navbar from "./components/Navbar";
import NudgewellProject from "./components/NudgewellProject";
import DivvyProject from "./components/DivvyProject";
import RoboFounders from "./components/RoboFounders";
import Circle from "./components/Circle";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Circle />
        <div className="header">
          <p className="title">David Meade Jr.👋🏾</p>
          <Navbar />
        </div>
        <div className="content">
          <ul>
            <li>Full-stack software engineer focused on customer-centric products.</li>
            {/* <li>Experienced in Fintech, startups and web3.</li> */}
            <li>
              Winner of the&nbsp;
              <a href="https://hackerthon.ai/" target="_blank" rel="noreferrer">
                Google 2022 Project Data Hack.
              </a>
            </li>
            <li>
              A recent graduate of a top European coding bootcamp and a renowned software engineering program funded by
              Santander.
            </li>
            <li>Worked with two startups backed by VCs Meta and Seedcamp.</li>
            {/* <li className="examples">
              Projects:
              <ul>
                <li>
                  <a href="https://www.collabz.online" target="_blank" rel="noreferrer">
                    Collabz
                  </a>
                  : Connecting small content creators with brands and agencies. (building)
                </li>
              </ul>
            </li> */}
            <li>
              I share personal insights on indie-hacking and startups on my:
              <ul>
                <li className="twitter">
                  <a href="https://twitter.com/davidmeadejr" target="_blank" rel="noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://davidmeadejr.substack.com/" target="_blank" rel="noreferrer">
                    Newsletter
                  </a>{" "}
                  (coming soon)
                </li>
              </ul>
            </li>
            {/* <li>
            <a href="https://www.linkedin.com/in/davidmeadejr/overlay/1635518455085/single-media-viewer/?profileId=ACoAACOnweMB2NEIXA_bJryyk9CNXmEts0TIftM">
              Resume
            </a>
          </li> */}
            <li>
              <a href="mailto:davidmeadejnr@gmail.com" target="_blank" rel="noreferrer">
                Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/davidmeadejr/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/davidmeadejr" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="caretContainer">
          <img className="caret" src="assets/icons/caretDown.png" alt="Caret Down"></img>
        </div>
        <div className="projectSection" id="projects">
          <NudgewellProject image={nudgewell} />
          <DivvyProject image={divvy} />
          <RoboFounders image={robo} />
        </div>
      </div>
    </>
  );
}
