import { FaHandPointRight } from "react-icons/fa";
import aboutImage from "../../assets/img/about-img.png";

export default function LandingSection() {
  return (
    <section className="landing">
      <div className="container">
        <div className="text">
          <h2 className="main-title">
            Know Who <span>I'M</span>
          </h2>
          <p className="main-paragraph">
            Hi Everyone, I am
            <span className="main-color"> Zeyad Farhat</span> from
            <span className="main-color"> Damitta, Egypt</span>. I am a student
            in the final year of high school. Additionally, I am currently
            working as freelancer.
          </p>
          <p className="main-paragraph">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="activities">
            <li>
              <FaHandPointRight /> Playing Games
            </li>
            <li>
              <FaHandPointRight /> Reading Books
            </li>
            <li>
              <FaHandPointRight /> Travelling
            </li>
          </ul>
        </div>
        <div className="img">
          <img src={aboutImage} alt="about-image" />
        </div>
      </div>
    </section>
  );
}
