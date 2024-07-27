import "../App.css";

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

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
        <span className="section-header-btn">Skills</span>
        <div className="skills-logos">
          <img src={JiraLogo} alt="Jira" />
          <img src={HtmlLogo} alt="HTML" />
          <img src={CssLogo} alt="CSS" />
          <img src={GitLogo} alt="Git" />
          <img src={ReactLogo} alt="React" />
          <img src={JSLogo} alt="JavaScript" />
          <img src={NextJSLogo} alt="NextJS" />
          <img src={ReduxLogo} alt="Redux" />
          <img src={TailwindLogo} alt="Tailwind CSS" />
          <img src={FigmaLogo} alt="Figma" />
          <img src={PostmanLogo} alt="Postman" />
          <img src={ConfluenceLogo} alt="Confluence" />
        </div>
    </section>
  )
}

export default Skills;