// src/components/Header/Header.jsx
import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/icon/Logo.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>

        {/* Navigation Links */}
        <div className={styles.navContainer}>
          <ul className={styles.navLinks}>
            <li><a href="/" className={styles.navLink}>Home</a></li>
            <li><a href="/service" className={styles.navLink}>Service</a></li>
            <li><a href="/company" className={styles.navLink}>Company</a></li>
            <li><a href="/career" className={styles.navLink}>Career</a></li>
            <li><a href="/blog" className={styles.navLink}>Blog</a></li>
            <li><a href="/contact" className={styles.navLink}>Contact us</a></li>
          </ul>
          
          {/* Clone Project Button */}
          <a href="#" className={styles.cloneBtn}>
            Clone project →
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;