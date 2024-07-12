import "../App.css";
import profileImage from "../assets/profile-image.jpg";
import AccentureLogo from "../assets/accenture.png";
import SavantisLogo from "../assets/savantis.png";
import StatusNeoLogo from "../assets/statusneo.png";
import ReactLogo from "../assets/react.png";
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
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my projects, learn more about me, and get in touch.</p>
      </div>
      <div className="companies-section">
        <div className="company-logos">
          <div className="company-logo">
            <img src={AccentureLogo} alt="Accenture" />
          </div>
          <div className="company-logo">
            <img src={SavantisLogo} alt="Savantis" />
          </div>
          <div className="company-logo">
            <img src={StatusNeoLogo} alt="StatusNeo" />
          </div>
        </div>
        <h3>My Past Organisations</h3>
      </div>
      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-logos">
          <img src={ReactLogo} alt="React" />
          <img src={JSLogo} alt="JavaScript" />
          <img src={ReduxLogo} alt="Redux" />
          <img src={GitLogo} alt="Git" />
          <img src={HtmlLogo} alt="HTML" />
          <img src={CssLogo} alt="CSS" />
          <img src={TailwindLogo} alt="Tailwind CSS" />
          <img src={FigmaLogo} alt="Figma" />
          <img src={JiraLogo} alt="Jira" />
          <img src={PostmanLogo} alt="Postman" />
          <img src={ConfluenceLogo} alt="Confluence" />
        </div>
      </div>
    </section>
  );
};

export default Home;
