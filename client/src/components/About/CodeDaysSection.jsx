import GitHubCalendar from "react-github-calendar";

const calenderTheme = {
  dark: [
    "rgb(56, 56, 56)",
    "rgb(78, 82, 100)",
    "rgb(100, 110, 147)",
    "rgb(121, 139, 197)",
    "rgb(142, 169, 250)",
  ],
};

export default function CodeDaysSection() {
  return (
    <section className="code-days">
      <h2 className="main-title">
        Days I <span>Code</span>
      </h2>
      <div className="container">
        <GitHubCalendar
          username="ZeyadFarhat11"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={calenderTheme}
        />
      </div>
    </section>
  );
}
