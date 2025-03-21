import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Smartdust Docs – professional dark theme">
      {/* Hero Banner */}
      <header className={clsx(styles.heroBanner)}>
        <div className={clsx('container', styles.heroContent)}>
          <h1 className={styles.title}>{siteConfig.title.toUpperCase()}</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
        </div>
      </header>
      
      {/* Features Section */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

