import Marquee from "react-fast-marquee";
import ReactLogo from "../assets/react.png";
import NextJSLogo from "../assets/nextjs.png";
import JSLogo from "../assets/js.png";
import ReduxLogo from "../assets/redux.png";
import GitLogo from "../assets/git.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css.png";
import TailwindLogo from "../assets/tailwind-css.png";
import FigmaLogo from "../assets/figma.png";
import JiraLogo from "../assets/jira.png";
import PostmanLogo from "../assets/postman.png";
import ConfluenceLogo from "../assets/confluence.jpg";
import "../App.css";

const Skills = () => {
  const skills = [
    { src: JiraLogo, alt: "Jira" },
    { src: HtmlLogo, alt: "HTML" },
    { src: CssLogo, alt: "CSS" },
    { src: GitLogo, alt: "Git" },
    { src: ReactLogo, alt: "React" },
    { src: JSLogo, alt: "JavaScript" },
    { src: NextJSLogo, alt: "NextJS" },
    { src: ReduxLogo, alt: "Redux" },
    { src: TailwindLogo, alt: "Tailwind CSS" },
    { src: FigmaLogo, alt: "Figma" },
    { src: PostmanLogo, alt: "Postman" },
    { src: ConfluenceLogo, alt: "Confluence" },
  ];

  return (
    <section id="skills" className="skills-section">
      <span className="section-header-btn">Skills</span>
      <div className="skills-carousel">
        <Marquee gradient={false} speed={35}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-slide"
              style={{ padding: "0 20px" }}
            >
              <img src={skill.src} alt={skill.alt} className="skill-logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
