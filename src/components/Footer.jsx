import React from "react";
import mainLogo from "../assets/media/main-logo.svg";
import accessibilityIcon from "../assets/media/icon5.png";
import appStoreLink from "../assets/media/link1.svg";
import googlePlayLink from "../assets/media/link2.svg";
import twitterIcon from "../assets/media/twitter-icon.svg";
import fbIcon from "../assets/media/fb-icon.svg";
import instaIcon from "../assets/media/insta-icon.svg";

const footerLinks = [
  { title: "The Quizizz Blog", href: "#" },
  { title: "Teacher Resources", href: "#" },
  { title: "State Test Prep", href: "#" },
  { title: "Quizizz for Work", href: "#" },
  { title: "Help Center", href: "#" },
  { title: "Teacher Panel", href: "#" },
  { title: "IQAPS", href: "#" },
  { title: "Accessibility and Inclusion", href: "#" },
  { title: "Sitemap", href: "#" },
  { title: "Terms of Service", href: "#" },
  { title: "Worksheets", href: "#" },
  { title: "Reseller program", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Privacy Center", href: "#" },
  { title: "Careers", href: "#" },
  { title: "About Us", href: "#" },
];

const socialLinks = [
  { href: "https://twitter.com/quizizz", icon: twitterIcon },
  { href: "https://facebook.com/quizizz", icon: fbIcon },
  { href: "https://instagram.com/quizizz", icon: instaIcon },
];

const Footer = ({ fontFamily = false }) => {
  const footerWrapperClass = `footer-wrapper ${
    fontFamily ? "font-opensans" : "font-quicksand"
  } | flex`;

  return (
    <footer className="footer">
      <div className={footerWrapperClass}>
        <div className="footer-top | flex">
          <div className="footer-column footer-column-1 | flex">
            <img className="footer-logo" src={mainLogo} alt="logo" />
            <div className="flex">
              <img
                className="footer-accessibility-logo"
                src={accessibilityIcon}
                alt="Accessibility Icon"
              />
              <span
                style={{
                  color: "#2D70AE",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Accessibility
                <br /> & Inclusion
              </span>
            </div>
          </div>
          <div className="footer-column">
            <ul className="flex">
              {footerLinks.slice(0, 10).map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <ul className="flex">
              {footerLinks.slice(10).map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column app-links | flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://share.quizizz.com/EBAH8OlhCM"
            >
              <img src={appStoreLink} alt="App Store" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://share.quizizz.com/nz4P08MhCM"
            >
              <img src={googlePlayLink} alt="Google Play" />
            </a>
          </div>
        </div>
        <div className="footer-bottom | flex">
          <ol className="flex">
            <li>2021 survey of 800+ teachers conducted by Quizizz</li>
            <li>Journal of Education and e-Learning Research (Source)</li>
            <li>
              International Online Journal of Education and Teaching (Source)
            </li>
          </ol>
          <div className="footer-end | flex">
            <div className="social-links-container | flex">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  <img
                    src={link.icon}
                    alt={`${link.href.split(".com/")[1]} icon`}
                  />
                </a>
              ))}
            </div>
            <div className="copyright-box">
              <p className="copyright-text">
                {new Date().getFullYear()} Quizizz Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
