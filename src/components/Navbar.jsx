import React from "react";
import "../styles/Navbar.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-scroll";
import hamburger from "../assets/hamburger-menu.webp"
import { useState } from "react";
function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
     <p>&lt;Mahi.dev/&gt;</p>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          offset={-73}
          duration={500}
          className="desktopMenuList"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuList"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="work"
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuList"
        >
          Portfolio
        </Link>
      <Link
        activeClass="active"
        to="contact"
        smooth={true}
        offset={-60}
        duration={500}
        className="desktopMenuList"
      >
        Contact
      </Link>
      </div>
      <img
        src={hamburger}
        alt="Burger Menu"
        className="mobmenu"
        onClick={() => {
          setMenu(!menu);
        }}
      />
      <div className="mobNavMenu" style={{ display: menu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList"
          onClick={() => {
            setMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          offset={-73}
          duration={500}
          className="desktopMenuList"
          onClick={() => {
            setMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuList"
          onClick={() => {
            setMenu(false);
          }}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="work"
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuList"
          onClick={() => {
            setMenu(false);
          }}
        >
          Portfolio
        </Link>
      <Link
        activeClass="active"
        to="contact"
        smooth={true}
        offset={-60}
        duration={500}
        className="desktopMenuList"
        onClick={() => {
          setMenu(false);
        }}
      >
        Contact
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
