import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '🔒',
    title: 'Local-First Privacy',
    description: (
      <>
        Location history and telemetry stay on your Android device in a local
        SQLite database. Cloud infrastructure is limited to authentication and
        device pairing — it never sees your route history.
      </>
    ),
  },
  {
    icon: '📡',
    title: 'VoLTE + GPS Connectivity',
    description: (
      <>
        A Quectel EG915U or SIMCom A7670G 4G module provides GPS positioning
        and VoLTE voice calling from the same compact tracker puck.
      </>
    ),
  },
  {
    icon: '🧭',
    title: 'IMU Dead Reckoning',
    description: (
      <>
        An LSM6DSOX MEMS-IMU with an on-chip Machine Learning Core keeps route
        accuracy intact when GPS signal is lost, such as in tunnels or dense
        urban canyons.
      </>
    ),
  },
  {
    icon: '🧩',
    title: 'Cartridge-Style Docking',
    description: (
      <>
        The same puck slides into a USB Type-C cassette slot on the OBD-II
        adapter, instantly turning it into a vehicle telematics node — no
        separate hardware to buy.
      </>
    ),
  },
  {
    icon: '🛠️',
    title: 'Fully Open Source',
    description: (
      <>
        PCB schematics, firmware, mobile app, and cloud infrastructure are all
        open source, so you can audit, extend, and self-host every layer.
      </>
    ),
  },
  {
    icon: '🐾',
    title: 'One Puck, Many Mounts',
    description: (
      <>
        Pet collar clip, backpack strap clip, or OBD-II dock — swap mounts to
        repurpose the same tracker across pets, people, and vehicles.
      </>
    ),
  },
];

function Feature({icon, title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon} aria-hidden="true">
          {icon}
        </div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>Why NexoBug</span>
          <Heading as="h2">Built for privacy, engineered for reuse</Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
