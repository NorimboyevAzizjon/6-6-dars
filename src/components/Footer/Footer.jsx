import React from "react";
import styles from "./Footer.module.css";
import Contact from "../../assets/images/Shapes3.png";
import FooterBg from "../../assets/images/footer-bg.png";
import Shapes from "../../assets/images/Shapes-footer.png";
import Shapes2 from "../../assets/images/Shapes.png";
import logo from "../../assets/icon/Logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterImage2}>
          <img src={Shapes} alt="" />
        </div>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterText}>
            <p className={styles.newsletterLabel}>NEWSLETTER</p>
            <h3 className={styles.newsletterTitle}>
              Subscribe our News Letter<br />to get Latest Updates.
            </h3>
          </div>
          <div className={styles.newsletterInput}>
            <input
              type="text"
              placeholder="Paresh@Pixeto.com"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className={styles.newsletterImage}>
          <img src={Shapes2} alt="" />
        </div>
      </div>
      <div className={styles.newsletterImage3}>
        <img src={Shapes} alt="" />
       </div>
      {/* Main Footer Content */}
      <div className={styles.mainFooter}>
  <div className={styles.footerContent}>
    <div className={styles.contactSection}>
      <h4>Let's make something special</h4>
      <span>Let's talk! 🤙</span>
      <p>020 7993 2905</p>
      <p>hi@finsweet.com</p>
    </div>

    <div className={styles.linksSection}>
      <a href="#" className={styles.active}>Home</a>
      <a href="#" className={styles.active}>Service</a>
      <a href="#" className={styles.active}>Company</a>
      <a href="#" className={styles.active}>Career</a>
      <a href="#" className={styles.active}>News</a>
    </div>

    <div className={styles.linksSection}>
      <a href="#" className={styles.active}>Service</a>
      <a href="#">Technical support</a>
      <a href="#">Testing</a>
      <a href="#">Development</a>
      <a href="#">AWS/Azure</a>
      <a href="#">Consulting</a>
      <a href="#">Information Technology</a>
    </div>

    <div className={styles.linksSection}>
      <a href="#" className={styles.active}>Resources</a>
      <a href="#">About Us</a>
      <a href="#">Testimonial</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of use</a>
      <a href="#">Blog</a>
    </div>
  </div>

  {/* Address Section */}
  <hr className={styles.addressDivider} />
  <div className={styles.addressSection}>
    
    <div className={styles.addressText}>
      <p>DLF Cybercity, Bhubaneswar,</p>
      <p>India, 752050</p>
    </div>
    <a href="#" className={styles.contactLink}>
      <img src={Contact} alt="Contact" />
      Contact Us →
    </a>
  </div>

  {/* Bottom Section */}
  
</div>
   <div className={styles.bottomSection}>
    <div className={styles.footerInfo}>
      <img src={logo} alt="Finsweet Logo" />
      <p>©2021 Finsweet</p>
    </div>
    <div className={styles.socialLinks}>
      <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
      <a href="#"><i className="fa-brands fa-twitter"></i></a>
      <a href="#"><i className="fa-brands fa-instagram"></i></a>
      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
    </div>
  </div>
    </footer>
  );
};

export default Footer;