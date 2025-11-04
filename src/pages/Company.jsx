import React from 'react';
import styles from './Company.module.css';
import img1 from '../assets/images/Image11.png';
import img2 from '../assets/images/Image22.png';
import img3 from '../assets/images/Image33.png';
import StoryRight from '../assets/images/StoryRight.png';
import LogoBar from '../assets/images/LogoBar.png';

const Company = () => {
  return (
    <div className={styles.company}>
        <div className={styles.heroSection}>
            <section className={styles.heroContent}>
              <p className={styles.sectionLabel}>Company</p>
              <h3 className={styles.heroTitle}>
                  Award-winning Company seen and used by millions around the world.
              </h3>
              <p className={styles.heroDescription}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.</p>
            </section>
        </div>
        
        <section className={styles.gallerySection}>
          <div className={styles.galleryContainer}>
            <div className={styles.galleryItem}>
              <img src={img1} alt="Gallery 1" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={img2} alt="Gallery 2" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={img3} alt="Gallery 3" className={styles.galleryImage} />
            </div>
          </div>
        </section>
        
        <section className={styles.storySection}>
            <div className={styles.storyContainer}>
                <div className={styles.storyContent}>
                    <p className={styles.storyLabel}>Our Story 👇</p>
                    <h3 className={styles.storyTitle}>From Startups to Titans of Industry</h3>
                    <p className={styles.storyDescription}>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
                </div>
                <div className={styles.storyImage}>
                    <img src={StoryRight} alt="Our Story" className={styles.storyImg} />
                </div>
            </div>
        </section>
        
        <section className={styles.logoSection}>
           <img src={LogoBar} alt="Partner Logos" className={styles.logoImage} />
        </section>
    </div>
  );
};

export default Company;