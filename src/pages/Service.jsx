import React from 'react';
import styles from './Service.module.css';
import logo from '../assets/images/Button.png';

const Service = () => {
  return (
    <div className={styles.service}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <p className={styles.sectionLabel}>Our Services</p>
          <h3 className={styles.title}>We Build Software Solutionthat Solve Clients Business Challenges</h3>
          <p className={styles.description}>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
          <button className={styles.ctaButton}><img src={ logo} alt="button" /></button>
        </div>
        <div className={styles.servicesContainer}>
          <ul className={styles.servicesList}>
            <li className={styles.serviceItem}>Technical support</li>
            <li className={styles.serviceItem}>Development</li>
            <li className={styles.serviceItem}>AWS/Azure</li>
            <li className={styles.serviceItem}>Consulting</li>
            <li className={styles.serviceItem}>Information Technology</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Service;