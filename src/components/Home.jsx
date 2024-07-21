import "../App.css";
import profileImage from "../assets/profile-image.jpg";
import AccentureLogo from "../assets/accenture.png";
import SavantisLogo from "../assets/savantis.png";
import StatusNeoLogo from "../assets/statusneo.png";
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

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="profile-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="portfolio-heading-start">
          Welcome to My <span className="portfolio-heading">Portfolio</span>
        </h1>
        <p className="portfolio-sub-heading">
          Explore my projects, learn more about me, and get in touch.
        </p>
      </div>
      <div className="companies-section">
        <div className="company-logos">
          <div className="company-logo">
            <a
              href="https://www.accenture.com/in-en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AccentureLogo} alt="Accenture" />
            </a>
          </div>
          <div className="company-logo">
            <a
              href="https://www.savantis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SavantisLogo} alt="Savantis" />
            </a>
          </div>
          <div className="company-logo">
            <a
              href="https://statusneo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={StatusNeoLogo} alt="StatusNeo" />
            </a>
          </div>
        </div>
        <h1 className="company-past-org">Past Organisations</h1>
      </div>
      <div className="skills-section">
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
      </div>
    </section>
  );
};

export default Home;
