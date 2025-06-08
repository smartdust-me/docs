import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FEATURES = [
  { icon: '⚙️', title: 'Instant Setup', text: 'Trouble-free devices in seconds.' },
  { icon: '🔗', title: 'Real Devices',        text: 'Test on actual Android or iOS devices hosted in the cloud.' },
  { icon: '📚', title: 'Instant Launch', text: 'Kickstart your testing environment in minutes with minimal setup.' },
];

export default function Home(): JSX.Element {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.3 }
    );
    cardsRef.current.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <Layout title="SmartDust Documentation">
      <div className="landing">
        <div className="landing-hero">
          <h1>🚀 SmartDust Documentation</h1>
          <p>All you need to know</p>
                    <Link
            className="landing-cta"
            to={useBaseUrl('/docs/cli-client')}
          >
            Przejdź do Docs →
          </Link>
        </div>
        <div className="landing-features">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              data-icon={f.icon}
              ref={el => el && cardsRef.current.push(el)}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
