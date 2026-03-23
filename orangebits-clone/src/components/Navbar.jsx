import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="nav_parent">
        <img src="/public/logo_obi_md.webp" alt="logo" className="logo_img" />
        <p className="menu_para">
          <span>Services</span>
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
