import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={`hero ${styles.heroBanner}`}>
      <div className={`container ${styles.heroContent}`}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          Welcome to my personal website! My name is Jonas, and I am a full-stack software engineer. With years of experience in both front-end and back-end development, I am capable of delivering high-quality, scalable software solutions. I'm also passionate about open source software and have contributed to several projects.
        </p>
        <p>
          Please feel free to explore and don't hesitate to get in touch if you have any questions. Thank you for visiting!
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Wiki
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/blog">
            Blog
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/sonallux"
            >
            GitHub Profile
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      {/*<main>
        <HomepageFeatures />
      </main>*/}
    </Layout>
  );
}
