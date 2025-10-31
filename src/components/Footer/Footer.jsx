import React from "react";
import styles from "./Footer.module.css";
import Contact from "../../assets/icon/Contact.svg";
import FooterBg from "../../assets/images/footer-bg.png";
import Shapes from "../../assets/images/Shapes-footer.png";
import Shapes2 from "../../assets/images/Shapes.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletterImage2}>
            <img src={Shapes} alt="" />
        </div>
         <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
          
          <p className={styles.newsletterLabel}>NEWSLETTER</p>
          <h3 className={styles.newsletterTitle}>
            Subscribe our News Letter to get Latest Updates.
          </h3>
        </div>
        <div className={styles.newsletterInput}>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.inputField}
          />
        </div>
         </div>
        <div className={styles.newsletterImage}>
            <img src={Shapes2 } alt="" />
        </div>
      </div>
      <div className={styles.newsletterImage3}>
        <img src={Shapes} alt="" />
      </div>
      <div className={styles.footerContent}>

        
      <div className={styles.footerContent}>
        <div className={styles.contactSection}>
          <h4>Let's make something special</h4>
          <span>Let's talk! 🤙</span>
          <p>020 7993 2905</p>
          <p>hi@finsweet.com</p>
        </div>

        <div className={styles.linksSection}>
          <h5>Home</h5>
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Company</a>
          <a href="#">Career</a>
          <a href="#">News</a>
        </div>

        <div className={styles.linksSection}>
          <h5>Service</h5>
          <p>Technical support</p>
          <p>Testing</p>
          <p>Development</p>
          <p>AWS/Azure</p>
          <p>Consulting</p>
          <p>Information Technology</p>
        </div>

        <div className={styles.linksSection}>
          <h5>Resources</h5>
          <p>About Us</p>
          <p>Testimonial</p>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Blog</p>
        </div>
      </div>

      </div>
      
      <div className={styles.addressSection}>
        <div>
          <p>DLF Cybercity, Bhubaneswar, </p>
          <p>India, 752050</p>
        </div>
        <img src={Contact} alt="" />
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.footerInfo}>
          <p> Finsweet</p>
          <p>©2021 Finsweet</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="#">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
