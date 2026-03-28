import React from "react";
// import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-left">
          <div className="logo">orangebits</div>

          <h4 className="footer-title">REGISTERED OFFICE</h4>
          <h3>Nagpur</h3>
          <p>
            Plot No. 171, 3rd Floor, Beside Mokha Towers, Trimurtee Nagar,
            Nagpur, Maharashtra 440022
          </p>

          <h4 className="footer-title mt">COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Case Study</li>
          </ul>

          <div className="social-icons">
            <span>in</span>
            <span>X</span>
            <span>f</span>
            <span>ig</span>
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="footer-center">
          <h4 className="footer-title">OUR OFFICES</h4>

          <h3>Pune</h3>
          <p>6th Floor, Wakad Business Bay, Wakad, Pune (MH) 411057</p>

          <h3>Bengaluru</h3>
          <p>
            401, Prestige Meridian Tower, MG Road, Bengaluru, Karnataka 560001
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h4 className="footer-title">SERVICES</h4>
          <ul>
            <li>Enterprise Application Development</li>
            <li>Staff Augmentation Services</li>
            <li>Product Engineering Services</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Orangebits Digital Solutions Private Limited</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>Cookies Policy</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
