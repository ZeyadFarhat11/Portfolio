import { TypeAnimation } from "react-type-animation";
import "./home.scss";
import landingImg from "../../assets/img/landing.svg";
import data from "../../data.json";
import { Tilt } from "react-tilt";
import avatar from "../../assets/img/home-avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <LandingSection />
      <IntroduceSection />
      <SocialSection />
    </>
  );
}

function LandingSection() {
  return (
    <section className="landing">
      <Container>
        <div className="text">
          <h1>
            Hi There! <span className="hand">👋🏻</span>
            <br />
            I'M <span className="name">MAHMOUD ORABY</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Freelancer",
              1000,
              "Django Developer",
              1000,
              "Python Developer",
              1000,
            ]}
            speed={1}
            wrapper="h3"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginTop: "20px",
              color: "#cd5ff8",
              display: "inline-block",
            }}
          />
        </div>
        <div className="img">
          <img src={landingImg} alt="Landing Image" />
        </div>
      </Container>
    </section>
  );
}

function IntroduceSection() {
  return (
    <section className="introduce">
      <Container>
        <div className="text">
          <h2>
            let me <span className="main-color">introduce</span> myself
          </h2>
          {data.homeIntroduceParagraphs.map((p, i) => (
            <p dangerouslySetInnerHTML={{ __html: p }} key={i}></p>
          ))}
        </div>
        <div className="img">
          <Tilt options={{ scale: 1, max: 20 }}>
            <img src={avatar} alt="avatar" />
          </Tilt>
        </div>
      </Container>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="social">
      <Container>
        <h2>find me on</h2>
        <p>
          Feel free to <span className="main-color">connect</span> with me
        </p>
        <div className="platforms">
          <a href={data.social.github}>
            <FontAwesomeIcon icon={faGithub} color="#222" />
          </a>
          <a href={data.social.twitter}>
            <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
          </a>
          <a href={data.social.linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} color="#0A66C2" />
          </a>
          <a href={data.social.instagram}>
            <FontAwesomeIcon icon={faInstagram} color="#C13584" />
          </a>
        </div>
      </Container>
    </section>
  );
}
