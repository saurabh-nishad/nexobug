import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const heroBadges = [
  '🔓 Open Source',
  '🔒 Local-First Storage',
  '📡 VoLTE + GPS',
  '🧭 IMU Dead Reckoning',
];

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroCopy}>
          <span className={styles.heroKicker}>Open-Source 4G Tracking</span>
          <Heading as="h1" className={styles.heroTitle}>
            Your tracker. Your data. Nowhere else.
          </Heading>
          <p className={styles.heroSubtitle}>
            One modular tracker puck for pets, people, and vehicles — built
            with a strict local-first philosophy, so your location history
            never leaves your phone.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/flashing-firmware">
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/nexotron-infotech/nexobug">
              View on GitHub
            </Link>
          </div>
          <ul className={styles.badgeRow}>
            {heroBadges.map((badge) => (
              <li key={badge} className={styles.badge}>
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.heroMedia}>
          <img
            src={useBaseUrl('/img/3d-render-image.png')}
            alt="Exploded diagram of the NexoBug tracker puck and its USB-C cassette dock"
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
}

type Step = {
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Clip or Dock the Puck',
    description:
      'Snap the puck onto a pet collar or backpack clip, or slide it into the USB-C cassette on the OBD-II vehicle adapter.',
  },
  {
    number: '02',
    title: 'Pair with the App',
    description:
      'Connect the puck to the Traccar-based Android app in seconds — no account required beyond initial device pairing.',
  },
  {
    number: '03',
    title: 'Track Locally',
    description:
      'View real-time position and route history entirely on-device. The cloud only ever sees authentication, never your location.',
  },
];

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>How It Works</span>
          <Heading as="h2">From unboxing to tracking in three steps</Heading>
        </div>
        <div className="row">
          {steps.map((step) => (
            <div key={step.number} className="col col--4">
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.number}</span>
                <Heading as="h3">{step.title}</Heading>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type UseCase = {
  tag: string;
  title: string;
  image: string;
  description: string;
};

const useCases: UseCase[] = [
  {
    tag: 'Pets',
    title: 'Pet Tracking',
    image: '/img/image-as-pet-tracker.png',
    description:
      'Clip the puck onto a collar to keep tabs on a pet during hikes and off-leash time.',
  },
  {
    tag: 'People',
    title: 'Personal / Backpack Tracking',
    image: '/img/image-on-bagpack.png',
    description:
      'Attach the puck to a backpack strap for everyday location tracking on the go.',
  },
  {
    tag: 'Vehicles',
    title: 'Vehicle Telematics',
    image: '/img/product-as-vehicle-tracker.png',
    description:
      'Dock the puck into the OBD-II adapter to unlock vehicle telematics — speed, RPM, and odometer.',
  },
];

function UseCases() {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>One Puck, Three Ways to Track</span>
          <Heading as="h2">Repurpose the same hardware everywhere</Heading>
        </div>
        <div className="row">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="col col--4">
              <div className={styles.useCaseCard}>
                <div className={styles.useCaseImageWrap}>
                  <img src={useBaseUrl(useCase.image)} alt={useCase.title} />
                  <span className={styles.useCaseTag}>{useCase.tag}</span>
                </div>
                <div className={styles.useCaseBody}>
                  <Heading as="h3">{useCase.title}</Heading>
                  <p>{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={clsx('container', styles.ctaInner)}>
        <Heading as="h2">Ready to build with NexoBug?</Heading>
        <p>
          Everything — hardware, firmware, mobile app, and docs — is open
          source. Fork it, flash it, and make it yours.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/hardware/bom-and-schematics">
            Explore the Hardware
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/nexotron-infotech/nexobug">
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="NexoBug — Open-Source, Privacy-First 4G Tracking"
      description="A versatile, open-source 4G/GPS tracking ecosystem for people, pets, high-value assets, and vehicles, built with a local-first privacy philosophy.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HowItWorks />
        <UseCases />
        <CtaBanner />
      </main>
    </Layout>
  );
}
