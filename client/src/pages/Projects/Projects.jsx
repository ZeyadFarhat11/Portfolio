import Project from "../../components/Projects/Project";
import { projects } from "../../data";
import "./projects.scss";

export default function Projects() {
  return (
    <main id="projects">
      <section className="projects">
        <h2 className="main-title">
          My Recent <span>Works</span>
        </h2>
        <p>Here are a few projects I've worked on recently</p>
        <div className="container">
          {projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
