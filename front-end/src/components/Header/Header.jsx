import {
  faCodeFork,
  faDiagramProject,
  faHome,
  faNewspaper,
  faPaperPlane,
  faPaperclip,
  faProjectDiagram,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Container>
        <div className="logo">MO.</div>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
          <Link to="/about">
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </Link>
          <Link to="/projects">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span>Projects</span>
          </Link>
          <Link to="/resume">
            <FontAwesomeIcon icon={faNewspaper} />
            <span>Resume</span>
          </Link>
        </nav>
        <a href="#" className="repo-button">
          <FontAwesomeIcon icon={faCodeFork} />
          <FontAwesomeIcon icon={faStar} />
        </a>
      </Container>
    </div>
  );
}

export default Header;
