import React from "react";
import { FaCogs } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <nav className="nav_parent">
        <img src="/public/logo_obi_md.webp" alt="logo" className="logo_img" />
        <p className="menu_para">
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
          </div>
          <span>Solutions</span>
          <span>Hire Developers</span>
          <span>About </span>
          <span>Carees </span>
          <span>Blogs </span>
        </p>

        <button className="navbar-btn">contact</button>
      </nav>
    </div>
  );
}

export default Navbar;
