import "./App.css";
import nudgewell from "./nudgewell.png";
import divvy from "./divvy.png";
import Navbar from "./components/Navbar";
import NudgewellProject from "./components/NudgewellProject";
import DivvyProject from "./components/DivvyProject";
import Circle from "./components/Circle";

export default function App() {
  return (
    <>
      <div className="wrapper">
        {/* <Circle /> */}
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <ul>
            <li>Leveraging code for customer-centric products.</li>
            <li>Focused on FinTech, Startups, Decentralisation and Reinforcement Learning.</li>
            <li>
              Winner of the&nbsp;
              <a href="https://hackerthon.ai/" target="_blank" rel="noreferrer">
                Google 2022 Project Data Hack.
              </a>
            </li>
            <li>Graduate of top European coding bootcamp and SWE degree funded by Santander.</li>
            <li>
              <a href="https://app.poap.xyz/token/6264372" target="_blank" rel="noreferrer">
                Chainlink Certified Smart Contract Developer.
              </a>
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
            {/* <li>
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
            </li> */}
            <li>
              <a href="https://github.com/davidmeadejr/external-curriculum-vitae/blob/master/external-curriculum-vitae-updated.pdf">
                Resume
              </a>
            </li>
            <li>
              <a href="https://github.com/davidmeadejr" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/davidmeadejr/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:davidmeadejnr@gmail.com" target="_blank" rel="noreferrer">
                Email
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="caretContainer">
          <img className="caret" src="assets/icons/caretDown.png" alt="Caret Down"></img>
        </div> */}
        {/* <div className="projectSection" id="projects">
          <NudgewellProject image={nudgewell} />
          <DivvyProject image={divvy} />
        </div> */}
      </div>
    </>
  );
}
