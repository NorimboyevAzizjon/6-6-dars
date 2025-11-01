import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/icon/Logo.svg";
import { NavLink , Link } from 'react-router-dom';

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
          <ul className={styles.navLinks}>
            <li><NavLink to="/" className={styles.navLink}>Home</NavLink></li>
            <li><NavLink to="/service" className={styles.navLink}>Service</NavLink></li>
            <li><NavLink to="/company" className={styles.navLink}>Company</NavLink></li>
            <li><NavLink to="/career" className={styles.navLink}>Career</NavLink></li>
            <li><NavLink to="/blog" className={styles.navLink}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={styles.navLink}>Contact us</NavLink></li>
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