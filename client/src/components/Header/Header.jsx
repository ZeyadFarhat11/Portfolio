import {
  FaHome,
  FaLaptopCode,
  FaNewspaper,
  FaStar,
  FaUser,
} from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import data from "../../data.jsx";
import "./header.scss";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [blur, setBlur] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuActive(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const listener = () => {
      if (scrollY >= 150) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, [setBlur]);

  return (
    <div className={`header ${blur ? "blured" : ""}`}>
      <div className="container">
        <Link className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className={`menu ${menuActive ? "active" : ""}`}>
          <nav>
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link to="/about">
              <FaUser />
              <span>About</span>
            </Link>
            <Link to="/projects">
              <FaLaptopCode />
              <span>Projects</span>
            </Link>
            <Link to="/resume">
              <FaNewspaper />
              <span>Resume</span>
            </Link>
          </nav>
          <a href={data.repoUrl} target="_blank" className="repo-button">
            <GoRepoForked />
            <FaStar />
          </a>
        </div>
        <button
          className={`menu-btn ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive((p) => !p)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Header;
