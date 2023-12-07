import React from 'react';
import Link from 'next/link';
import localFont from "next/font/local"

const berkley = localFont({src:"../public/assets/BerkeleyMonoTrial-Regular.ttf"})

const Home = () => {
  return (
    <div className={`wrapper ${berkley.className}`}>
      <div className="header">
      </div>
      <div className="content">
        <h2>Who</h2>
        <ul>
          <li>David Meade Jr.</li>
        </ul>
        <h2>What</h2>
        <ul>
          <li>Software Engineer among other things</li>
          <li>Interested in optimising ML models for customer-centric products</li>
          <li>Now: DevOps and SWE consultancy to public and private sector clients</li>
          <li>
            Before: Software Engineer @ two web3 startups backed by Seedcamp and Meta
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">
                SWE apprentice @ Santander
              </li>
            </ul>
          </li>
        </ul>
        <h2>Where</h2>
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
                <Link href="mailto:davidmeadejnr@gmail.com" target="_blank" rel="noreferrer">
                  Email
                </Link>
              </li>
            </ul>
          </li> 
        <ul>
        </ul>
        </ul>
        <h2>Why</h2>
        <ul><li>Purpose over popularity, Direction over speed</li></ul>
      </div>
      <p>Updated December 7th, 2023</p>
    </div>
  );
};

export default Home;

