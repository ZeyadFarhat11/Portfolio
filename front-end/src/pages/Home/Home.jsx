import { TypeAnimation } from "react-type-animation";
import "./home.scss";
import landingImg from "../../assets/img/landing.svg";
import data from "../../data.jsx";
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
    <main id="home">
      <LandingSection />
      <IntroduceSection />
      <SocialSection />
    </main>
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
          <h2 className="main-title">
            let me <span>introduce</span> myself
          </h2>
          <p className="main-paragraph">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p className="main-paragraph">
            I am fluent in classics like <span>C++, Javascript and Go.</span>
          </p>
          <p className="main-paragraph">
            My field of Interest's are building new{" "}
            <span>Web Technologies and Products</span> and also in areas related
            to <span>Blockchain</span>.
          </p>
          <p className="main-paragraph">
            Whenever possible, I also apply my passion for developing products
            with <span>Node.js</span> and{" "}
            <span>Modern Javascript Library and Frameworks</span> like{" "}
            <span>React.js</span> and <span>Next.js</span>
          </p>
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
