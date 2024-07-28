import Blogs from "./Blogs";
import AboutMe from "./AboutMe";

import "../App.css";

import profileImage from "../assets/profile-image.jpg";
import AccentureLogo from "../assets/accenture.png";
import SavantisLogo from "../assets/savantis.png";
import StatusNeoLogo from "../assets/statusneo.png";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <section id="home" className="home-section">
        <div className="profile-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1 className="text-2xl text-center font-bold bg-transparent border-4 border-transparent rounded-lg py-2 px-4 hover:bg-purple-800 hover:border-purple-300 hover:cursor-pointer">
            <a
              href="https://www.linkedin.com/in/waqqar-khan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="portfolio-heading">Waqqar Khan</span>
              <span className="text-sm">↗️</span>
            </a>
          </h1>
          <h2 className="lg:text-xl text-center lg:font-bold text-gray-600 portfolio-heading-title">
            Senior Software Engineer from India.
          </h2>
          <p className="portfolio-sub-heading">
            For learning purpose, please explore blogs...
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
      </section>
      <Skills />
      <Blogs />
      <AboutMe />
    </>
  );
};

export default Home;
