import { Container, Row } from "react-bootstrap";
import "./about.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import aboutImage from "../../assets/img/about-img.png";
import { skills, tools } from "../../data";
import { useEffect, useState } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <main id="about">
      <LandingSection />
      <SkillsetSection />
      <CodeDaysSection />
    </main>
  );
}

function LandingSection() {
  return (
    <section className="landing">
      <Container>
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
              <FontAwesomeIcon icon={faHandPointRight} /> Playing Games
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} /> Reading Books
            </li>
            <li>
              <FontAwesomeIcon icon={faHandPointRight} /> Travelling
            </li>
          </ul>
        </div>
        <div className="img">
          <img src={aboutImage} alt="about-image" />
        </div>
      </Container>
    </section>
  );
}

function SkillsetSection() {
  return (
    <section className="skillset">
      <h2 className="main-title">
        Professional <span>Skillset</span>
      </h2>

      <Container>
        <div className="skills-grid" style={{ marginBottom: "70px" }}>
          {skills.map((skill, i) => (
            <div className="skill" title={skill.title} key={i}>
              {skill.type === "img" ? (
                <img
                  src={skill.icon}
                  alt={skill.title}
                  style={{ ...skill.style }}
                />
              ) : (
                skill.icon
              )}
            </div>
          ))}
        </div>
      </Container>

      <h2 className="main-title">
        <span>Tools</span> I use
      </h2>

      <Container>
        <div className="tools-grid">
          {tools.map((tool, i) => (
            <div className="tool" title={tool.title} key={i}>
              {tool.type === "img" ? (
                <img
                  src={tool.icon}
                  alt={tool.title}
                  style={{ ...tool.style }}
                />
              ) : (
                tool.icon
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const calenderTheme = {
  dark: [
    "rgb(56, 56, 56)",
    "rgb(78, 82, 100)",
    "rgb(100, 110, 147)",
    "rgb(121, 139, 197)",
    "rgb(142, 169, 250)",
  ],
};

function CodeDaysSection() {
  return (
    <section className="code-days">
      <h2 className="main-title">
        Days I <span>Code</span>
      </h2>
      <Container>
        <GitHubCalendar
          username="ZeyadFarhat11"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={calenderTheme}
        />
      </Container>
    </section>
  );
}
