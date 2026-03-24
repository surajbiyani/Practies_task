import React from "react";
import { FaCogs } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <nav className="nav_parent">
        <img src="/public/logo_obi_md.webp" alt="logo" className="logo_img" />
        <div className="menu_para">
          <div className="nav-menu">
            <div className="nav-item">
              <span>Services</span>

              <div className="mega-menu">
                <div className="mega-container">
                  <div className="card">
                    <FaCogs className="icon" />
                    <p>Enterprise Application Development </p>
                  </div>
                  <div className="card">
                    <FaRobot className="icon" />
                    <p>Product Engineering Services</p>
                  </div>
                  <div className="card">
                    <FaUsers className="icon" />
                    <p>Staff Augmentation Services</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second functionality same */}
            <div className="nav-item">
              <span>Solutions</span>

              <div className="mega-menu">
                <div className="mega-container">
                  <div className="card">
                    <FaProjectDiagram className="icon" />
                    <p>Teachnology</p>
                  </div>
                  <div className="card">
                    <FaCog className="icon" />
                    <p>Industry</p>
                  </div>
                  <div className="card">
                    <FaBullhorn className="icon" />
                    <p>Digital Markating</p>
                  </div>
                </div>
              </div>
            </div>
            <span>Hire Developers</span>
            <div className="nav-item">
              <span>About Us</span>

              <div className="mega-menu about-menu">
                <div className="about-container">
                  {/* LEFT */}
                  <div className="about-left">
                    <h3>About Orangebits</h3>

                    <p>
                      Founded in 2016, Orangebits offers SaaS, Staff
                      Augmentation and Product Engineering Services. Following
                      the agile methodology, we have successfully driven digital
                      transformation for businesses across healthcare,
                      education...
                    </p>

                    <button className="learn-btn">Learn More</button>
                  </div>

                  {/* RIGHT */}
                  <div className="about-right">
                    <p className="call-text">Call us at:</p>

                    <div className="phone-box">+91 89569 47646</div>

                    <p className="or-text">or</p>

                    <p>
                      Email us at:{" "}
                      <span className="email">info@orangebitsindia.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span>Carees </span> <span>Blogs </span>
          </div>
        </div>

        <button className="navbar-btn">contact</button>
      </nav>
    </div>
  );
}

export default Navbar;
