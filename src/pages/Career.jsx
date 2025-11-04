import React from 'react';
import styles from './Career.module.css';
import img1 from '../assets/images/Shapes111.png';
import img2 from '../assets/icon/Image2.svg';

const Career = () => {
  return (
    <div className={styles.career}>
      <div className={styles.heroSection}>
        <section className={styles.heroContent}>
            <div className={styles.titleContainer}>
                <p className={styles.sectionLabel}>CAREER AT FINSWEET</p>
                <img src={img1} alt="Shapes" className={styles.shapeImage} />
            </div>
            <div className={styles.heroTextContainer}>
              <h3 className={styles.heroTitle}>
                We hired people who are<br />
                Always Passionate about<br />
                what they do
              </h3>
              <p className={styles.heroDescription}>
                Through True Rich Attended does no end it his mother since real had half<br />
                every him case in packages enquire we up ecstatic unsatiable saw.
              </p>
            </div>
        </section>
      </div>
      <div className={styles.positionsSection}>
        <div className={styles.iconContainer}>
            <img src={img2} alt="Positions" className={styles.positionIcon} />
        </div>
        <p className={styles.positionsText}>See Our open positions</p>
        <span className={styles.arrowIcon}>👇</span>
      </div>
    </div>
  );
};

export default Career;