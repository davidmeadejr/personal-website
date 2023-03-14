import "./App.css";

export default function App() {
  return (
    <div className="container">
      <p className="headerName">David Meade Jr.👋🏾</p>
      <div className="aboutMe">
        <ul>
          <li>Full-stack software engineer focused on customer-centric products.</li>
          {/* <li>Experienced in Fintech, startups and web3.</li> */}
          <li>
            Winner of the&nbsp;<a href="https://hackerthon.ai/">Google 2022 Project Data Hack.</a>
          </li>
          <li>
            A recent graduate of a top European coding bootcamp and a renowned software engineering program funded by
            Santander.
          </li>
          <li>Worked with two startups backed by VCs Meta and Seedcamp.</li>
          <li className="examples">
            Projects:
            <ul>
              <li>
                <a href="https://www.collabz.online">Collabz</a>: Connecting small content creators with brands and
                agencies. (building)
              </li>
            </ul>
          </li>
          <li>
            I share personal insights on indie-hacking and startups on my:
            <ul>
              <li className="twitter">
                <a href="https://twitter.com/davidmeadejr">Twitter</a>
              </li>
              <li>
                <a href="https://davidmeadejr.substack.com/">Newsletter</a> (coming soon)
              </li>
            </ul>
          </li>
          {/* <li>
            <a href="https://www.linkedin.com/in/davidmeadejr/overlay/1635518455085/single-media-viewer/?profileId=ACoAACOnweMB2NEIXA_bJryyk9CNXmEts0TIftM">
              Resume
            </a>
          </li> */}
          <li>
            <a href="mailto:davidmeadejnr@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/davidmeadejr/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/davidmeadejr">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
