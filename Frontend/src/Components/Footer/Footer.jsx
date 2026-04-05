import React from "react";
import "./Footer.css";

// MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section">
          <h4>Follow us</h4>
          <h2 className="logo">
            TIMES<span>JOBS</span>
          </h2>

          <div className="social-icons">
            <FacebookIcon />
            <LinkedInIcon />
            <YouTubeIcon />
            <XIcon />
          </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <p>About us</p>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Contact us</p>
        </div>

        {/* Candidate */}
        <div className="footer-section">
          <h4>For Candidate</h4>
          <p>Create Resume</p>
        </div>

        {/* Employer */}
        <div className="footer-section">
          <h4>For Employer</h4>
          <p>Post a Job</p>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Helpful Resources</h4>
          <p>Site Map</p>
          <p>Security Advice</p>
          <p>Fraud Alert</p>
        </div>

        {/* Products */}
        <div className="footer-section">
          <h4>Our Products</h4>

          <div className="product-box">TECHGIG</div>
          <div className="product-box">OUTSPARK</div>

          <div className="app-box">
            Download our app for job updates
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;