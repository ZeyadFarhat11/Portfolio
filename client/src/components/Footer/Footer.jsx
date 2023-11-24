import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import data from "../../data.jsx";
import "./footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {data.copyrightMessages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
        <div className="social">
          <a href={data.social.github}>
            <FaGithub />
          </a>
          <a href={data.social.twitter}>
            <FaTwitter />
          </a>
          <a href={data.social.linkedIn}>
            <FaLinkedin />
          </a>
          <a href={data.social.instagram}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
