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
        <ul className="flashing-cursor">
          &gt; David Meade Jr.
        </ul>
        <h2>Work?</h2>
        <ul>
          <li>Programmer and ML Engineer</li>
          <li>Interested in modern computing and productising ML</li>
          <li>
            Present: DevOps and SWE consultancy to UK public and private sector clients
          </li>
          <li>
            Past: Software Engineer @ two web3 startups
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">
                SWE apprentice @ the largest bank in Spain
              </li>
            </ul>
          </li>
        </ul>
        <h2>Where?</h2>
        <ul>
          <li>
            🌍
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">Born in London, UK</li>
              <li className="list-[circle]">Based in Milton Keynes, UK</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            🌐
            <ul className="list-inside list-disc ml-4">
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
              <li className="list-[circle]">
                <Link href="https://davidmeadejr.com/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </Link>
              </li>
            </ul>
          </li>
          <ul></ul>
        </ul>
        <h2>Why?</h2>
        <ul>
          <li>Purpose over popularity, Direction over speed</li>
        </ul>
      </div>
      <p className="mt-3">Updated December 20th, 2023</p>
    </div>
  );
};

export default Home;


