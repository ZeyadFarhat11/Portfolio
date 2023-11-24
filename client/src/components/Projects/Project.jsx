import { FaNewspaper, FaGithub } from "react-icons/fa";

const colors = ["#198754", "#0d6efd", "#6610f2", "#fd7e14", "#0dcaf0"];

export default function Project({
  image,
  title,
  description,
  github,
  demo,
  technologies,
}) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <div className="text">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, i) => (
            <span
              className="tech"
              key={i}
              style={{ backgroundColor: colors[i % 5] }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="btns">
          {!!github && (
            <a href={github} className="main-button" target="_blank">
              <FaGithub /> Github
            </a>
          )}
          {!!demo && (
            <a href={demo} className="main-button" target="_blank">
              <FaNewspaper /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
