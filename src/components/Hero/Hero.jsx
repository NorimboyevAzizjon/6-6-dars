import styles from './Hero.module.css';
import Header from '../../assets/images/Header.png';
import Button from '../../assets/images/Button.png';
import Client1 from '../../assets/images/Logo1.svg';
import Client2 from '../../assets/images/Logo2.svg';
import Client3 from '../../assets/images/Logo3.svg';
import Client4 from '../../assets/images/Logo4.svg';
import Client5 from '../../assets/images/Logo5.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Transform Your Idea Into Reality with Finsweet
          </h1>
          <p className={styles.subtitle}>
           The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
          </p>
          <button className={styles.ctaButton}>
            <img src={Button} alt="Request Quote" />
          </button>
        </div>
        <div className={styles.imageContainer}>
            <img src={Header} alt="Hero Illustration" />
        </div>
      </div>

      <div className={styles.clientsSection}>
        <div className={styles.clientsWrapper}>
          <div className={styles.clientsText}>
            <p className={styles.ourClients}>Our Clients</p>
            <p className={styles.workedWith}>We've Worked with</p>
          </div>
          <ul className={styles.clientsList}>
            <li><img src={Client1} alt="Client 1" className={styles.clientLogo} /></li>
            <li><img src={Client2} alt="Client 2" className={styles.clientLogo} /></li>
            <li><img src={Client3} alt="Client 3" className={styles.clientLogo} /></li>
            <li><img src={Client4} alt="Client 4" className={styles.clientLogo} /></li>
            <li><img src={Client5} alt="Client 5" className={styles.clientLogo} /></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;