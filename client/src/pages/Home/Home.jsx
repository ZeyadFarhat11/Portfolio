import { BiCloudDownload } from "react-icons/bi";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Tilt } from "react-tilt";
import avatar from "../../assets/img/home-avatar.svg";
import landingImg from "../../assets/img/landing.svg";
import data from "../../data.jsx";
import "./home.scss";
import TextTyping from "../../components/TextTyping.jsx";
import resume from "../../assets/resume.pdf";
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
      <div className="container">
        <div className="text">
          <h1>
            Hi There! <span className="hand">👋🏻</span>
            <br />
            I'M <span className="name">ZEYAD FARHAT</span>
          </h1>
          <TextTyping sequance={["MERN-Stack Developer", "Node Crawler"]} />
          <div className="btns">
            <button>
              Let's Work Together <LiaAngleRightSolid />
              <LiaAngleRightSolid />
            </button>
            <a target="_blank" href={resume}>
              Download Resume <BiCloudDownload />
            </a>
          </div>
        </div>
        <div className="img">
          <img src={landingImg} alt="Landing Image" />
        </div>
      </div>
    </section>
  );
}

function IntroduceSection() {
  return (
    <section className="introduce">
      <div className="container">
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
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="social">
      <div className="container">
        <h2>find me on</h2>
        <p>
          Feel free to <span className="main-color">connect</span> with me
        </p>
        <div className="platforms">
          <a href={data.social.github} target="_blank">
            <FaGithub color="#222" />
          </a>
          <a href={data.social.facebook} target="_blank">
            <FaFacebook color="#316FF6" />
          </a>
          <a href={data.social.linkedIn} target="_blank">
            <FaLinkedin color="#0A66C2" />
          </a>
        </div>
      </div>
    </section>
  );
}
