import "./footer.scss";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        {data.copyrightMessages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
        <div className="social">
          <a href={data.social.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={data.social.twitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={data.social.linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={data.social.instagram}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
