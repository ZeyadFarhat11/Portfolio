import { Container } from "react-bootstrap";
import "./projects.scss";
import { projects } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
function Projects() {
  return (
    <main id="projects">
      <section className="projects">
        <h2 className="main-title">
          My Recent <span>Works</span>
        </h2>
        <p>Here are a few projects I've worked on recently</p>
        <Container>
          {projects.map(({ image, title, description, github, demo }, i) => (
            <div className="project" key={i}>
              <img src={image} alt={title} />
              <div className="text">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="btns">
                  {!!github && (
                    <a href={github} className="main-button" target="_blank">
                      <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                  )}
                  {!!demo && (
                    <a href={demo} className="main-button" target="_blank">
                      <FontAwesomeIcon icon={faNewspaper} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}

export default Projects;
