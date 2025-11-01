import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/icon/Logo.svg";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className={styles.navContainer}>
          <nav className={styles.navLinks}>
            <NavLink to="/" className={styles.navLink}>Home</NavLink>
            <NavLink to="/service" className={styles.navLink}>Service</NavLink>
            <NavLink to="/company" className={styles.navLink}>Company</NavLink>
            <NavLink to="/career" className={styles.navLink}>Career</NavLink>
            <NavLink to="/blog" className={styles.navLink}>Blog</NavLink>
            <NavLink to="/contact" className={styles.navLink}>Contact us</NavLink>
          </nav>
          
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