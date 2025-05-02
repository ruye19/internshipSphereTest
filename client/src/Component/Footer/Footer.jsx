import React from "react";
import styles from "./footer.module.css"; 
import logo from "../Footer/image/66918.jpg"; 
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo and Socials */}
      <div className={styles.logoSection}>
        <img src={logo} alt="intership sphere Logo" className={styles.logo} />
        <div className={styles.iconsWrapper}>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.youtube.com" aria-label="YouTube">
            <FaYoutube className={styles.icon} />
          </a>
        </div>
      </div>

      {/* Useful Links */}
      <div className={styles.linksSection}>
        <h3>Useful Links</h3>
        <ul>
            <li>
                <a href="#">How it works</a>
            </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className={styles.contactSection}>
        <h3>Contact Info</h3>
        <ul>
          <li>
            <a href="mailto:support@internship.com">support@AAITintership.com</a>
          </li>
          <li>
            <a href="tel:+12023862702">+1-202-386-2702</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
