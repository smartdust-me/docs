import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FEATURES = [
  { icon: '📱', title: 'Real Devices', text: () => (<p>Test on actual Android or iOS devices hosted in the cloud.</p>)},
  { icon: '⚙️', title: 'Try for yourself', text: () => (<p>Try using SmartDust devices for free at <a href={'https://public.smartdust.me'}>public.smartdust.me</a></p>)  },
  { icon: '🧪', title: 'Your Own Lab', text: () => (<p>Order a custom Lab instance just for you at <a href={'https://smartdust.me'}>smartdust.me</a></p>) },
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
        <div className="landing-title">
          <h1>SmartDust Documentation</h1>
          <p>All you need to know</p>
                    <Link
            className="landing-cta"
            to={useBaseUrl('/android-appium-parallel')}
          >
            Go to Documentation →
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
              <f.text></f.text>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
