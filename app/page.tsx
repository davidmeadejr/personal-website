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
          <li className="mb-2">Building scalable infrastructure with a focus on platform engineering and MLOps.
          </li>
          <li>Present:
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle] mb-2">Software Engineer (Platform) @ Capgemini.</li>
            </ul>
          </li>
          <li>
            Past:
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle]">Software Engineer @ Flooz, a Web3 startup and crypto exchange backed by Seedcamp.
              </li>
              <li className="list-[circle] mb-2">Software Engineer @ Santander.</li>
            </ul>
          </li>
          <li>Interested in:
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle] mb-2">
                Building high-performance customer-centric products that solve real problems.
              </li>
            </ul>
          </li>
        </ul>
        <h2>Where?</h2>
        <ul>
          <li>
            🌍
            <ul className="list-inside list-disc ml-4">
              <li className="list-[circle] mb-2">London, England</li>
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
              <li className="list-[circle] mb-2">
                <Link href="mailto:david@davidmeadejr.com" target="_blank" rel="noreferrer">
                  david@davidmeadejr.com
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
      <p className="mt-3">Updated 10th July, 2025</p>
    </div>
  );
};

export default Home;
