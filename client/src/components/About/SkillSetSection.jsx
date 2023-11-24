import { skills, tools } from "../../data.jsx";
export default function SkillsetSection() {
  return (
    <section className="skillset">
      <h2 className="main-title">
        Professional <span>Skillset</span>
      </h2>

      <div className="container">
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
      </div>

      <h2 className="main-title">
        <span>Tools</span> I use
      </h2>

      <div className="container">
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
      </div>
    </section>
  );
}
