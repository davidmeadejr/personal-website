import React from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';

const berkley = localFont({ src: '../public/assets/BerkeleyMonoTrial-Regular.ttf' });

const Home = () => {
  return (
    <div className={`wrapper ${berkley.className} text-[0.875rem]`}>
      <div className="header"></div>
      <div className="content">
        <h2>Who?</h2>
        <div className="flashing-cursor">
          &gt; David Meade Jr.
        </div>
        <h2>Work?</h2>
        <ul>
          <li>Building systems and infrastructure.</li>
          <li>Present:
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">SWE (Platform Eng.) @ Capgemini.</li>
            </ul>
          </li>
          <li>
            Past:
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">SWE @ two VC backed web3 startups.</li>
              <li className="list-[circle]">SWE @ Santander.</li>
            </ul>
          </li>
          <li>Interested in:
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">Understanding systems from first principles.</li>
              <li className="list-[circle]">Building high-performance products that solve real problems.</li>
            </ul>
          </li>
        </ul>
        <h2>Where?</h2>
        <ul>
          <li>
            🌍
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">London, England</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            🌐
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">
                <Link href="https://davidmeadejr.com/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </Link>
              </li>
              <li className="list-[circle]">
                <Link href="https://github.com/davidmeadejr" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </li>
              <li className="list-[circle]">
                <Link href="https://www.linkedin.com/in/davidmeadejr/" target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
              </li>
              <li className="list-[circle]">
                <Link href="https://twitter.com/davidmeadejr" target="_blank" rel="noreferrer">
                  Twitter
                </Link>
              </li>
              <li className="list-[circle]">
                <Link href="mailto:david@davidmeadejr.com" target="_blank" rel="noreferrer">
                  Email
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <h2>Why?</h2>
        <ul>
          <li>Purpose over popularity, Direction over speed.</li>
          <li>To win.</li>
        </ul>
      </div>
      <p className="mt-3">Updated 2nd June, 2025</p>
    </div>
  );
};

export default Home;
