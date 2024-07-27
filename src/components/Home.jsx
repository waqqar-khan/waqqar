import AboutMe from "./AboutMe";

import "../App.css";

import profileImage from "../assets/profile-image.jpg";
import AccentureLogo from "../assets/accenture.png";
import SavantisLogo from "../assets/savantis.png";
import StatusNeoLogo from "../assets/statusneo.png";

const Home = () => {
  return (
    <>
      <section id="home" className="home-section">
        <div className="profile-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1 className="text-2xl text-center text-purple-600 font-bold">
            My Name is <span className="portfolio-heading">Waqqar Khan</span>
          </h1>
          <h2 className="text-xl text-center font-bold text-gray-600 ">
            I am a Senior Software Engineer from India.
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
      <AboutMe />
    </>
  );
};

export default Home;
