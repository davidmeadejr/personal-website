import "./App.css";

export default function App() {
  return (
    <div className="container">
      <p className="headerName">David Meade Jr.</p>
      <div className="aboutMe">
        <ul>
          <li>Full-stack software engineer focused on customer-centric products.</li>
          <li>Experienced in Fintech, startups and web3.</li>
          <li>
            <a href="https://hackerthon.ai/">2022 Google Project Data Hack winner.</a>
          </li>
          <li>Focused on creating value by building software.</li>
          <li className="examples">
            A few examples:
            <ul>
              <li>
                <a href="https://www.collabz.online">Collabz</a>: Connects small content creators with brands and
                agencies. (coming soon)
              </li>
            </ul>
          </li>
          {/* <li>
            Previously, as a software engineer I helped build & scale Santander's in-house learning & mentoring
            platform.
          </li>
          <li>I also was a software engineer at two VC-backed web3 startups focusing on front-end development.</li> */}
          <li>
            I share insights on creating value by building software through my own projects here →&nbsp;
            <a href="https://davidmeadejr.substack.com/">Newsletter</a>
          </li>
          <li>
            Building in public and tweeting about it here →&nbsp;
            <a href="https://twitter.com/davidmeadejr">Twitter</a>
          </li>

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
