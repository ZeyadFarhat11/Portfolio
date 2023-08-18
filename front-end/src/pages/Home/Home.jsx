import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./home.scss";
import landingImg from "../../assets/img/landing.svg";
export default function Home() {
  return (
    <>
      <LandingSection />
    </>
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
      </div>
    </section>
  );
}
