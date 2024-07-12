import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anirudhGoelImage from "../assets/anirudh-goel.jpg";
import nishkarshRajImage from "../assets/nishkarsh-raj.jpg";
import sureshRamImage from "../assets/suresh-ram.jpg";
import anshumanTripathiImage from "../assets/anshuman-tripathi.jpg";
import manojRaveendranImage from "../assets/manoj-raveendran.jpg";
import viratSinghImage from "../assets/virat-singh.jpg";
import "../App.css";

const Recommendations = () => {
  const recommendations = [
    {
      image: anirudhGoelImage,
      feedback: `I have had the pleasure of working with Waqar on the Backstage project, and I can confidently say that he is an exceptional developer who consistently delivers high-quality work.
Waqar has a deep understanding of React and its ecosystem, and he is always eager to learn and stay up-to-date with the latest developments in the field. He is skilled in writing clean and efficient code that is easily maintainable, and he has a keen eye for detail, ensuring that their code is both functional and visually appealing.
What truly sets Waqar apart, however, is his dedication towards work. He is always willing to go above and beyond to ensure that projects are completed on time and to the highest standards. He is an excellent communicator, and works collaboratively with team members to ensure that everyone is on the same page and that the project is moving forward smoothly. For Backstage, he required to learn new things and do a lot of research where I found him that he did not lose his motivation and tried to excel in his work.
Overall, I can recommend that Waqar is an incredibly talented and hardworking developer who would make a valuable addition to any team.`,
      name: "Anirudh Goel",
      position: "Senior Product Manager",
      company: "Global Logic",
      linkedin: "https://www.linkedin.com/in/anirudhgoel7",
    },
    {
      image: nishkarshRajImage,
      feedback:
        "I've had the opportunity to collaborate with Waqqar to build the Developer Experience platform for one of the biggest global management consulting firms. He showed tremendous ownership and aptitude to learn and evolve. Working with Waqqar has been truly enjoyable as he is a pleasure to work alongside. He consistently displays eagerness and passion for providing business value, making him an asset to any team.",
      name: "Nishkarsh Raj",
      position: "Principal Consultant",
      company: "StatusNeo",
      linkedin: "https://www.linkedin.com/in/nishkarshraj",
    },
    {
      image: sureshRamImage,
      feedback:
        "Waqqar is dedicated, hardworking and great individual contributor. He finds his ways around to learn and make things happen. He reported to me directly for a project where he was given an individual team player role, he excelled with his self learning abilities and become the key resource.",
      name: "Suresh Ram",
      position: "Software Engineer II",
      company: "Conde Nast",
      linkedin: "https://www.linkedin.com/in/suresharam",
    },
    {
      image: anshumanTripathiImage,
      feedback:
        "Waqqar Khan is a great team player with splendid team leader capability. His technical skills always come handy whenever team faces any complex problem. Not only he stands firm in pressurising situation but tries hard to keep pressure off the team by leading from the front. As a person, I woiuld say he is responsible , friendly and with positive vibes enough to make every target look easy. Its always a pleasure to work with him.",
      name: "Anshuman Tripathi",
      position: "Senior Frontend Developer",
      company: "Synechron",
      linkedin: "https://www.linkedin.com/in/anshuman-tripathi-442679193",
    },
    {
      image: manojRaveendranImage,
      feedback:
        "Waqqar consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time.I highly recommend him to any company.",
      name: "Manoj Raveendaran",
      position: "Senior Software Engineer",
      company: "Cognizant",
      linkedin: "https://www.linkedin.com/in/manoj-raveendran-98018466",
    },
    {
      image: viratSinghImage,
      feedback:
        "Waqqar has high degree of problem solving and technical skills. He is very polite , humble and easily approachable person. Whenever you need any help he will be there to help you either its professional or personal. He adopts a professional approach in solving client business problems. His knowledge of software life cycle tools is excellent. He delivery his code with high quality and does everything in an organized way. He is a great developer. One word for him is he is a GEM.",
      name: "Virat Singh",
      position: "Software Engineer",
      company: "EPAM Systems",
      linkedin: "https://www.linkedin.com/in/virat-singh1997",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="recommendations">
      <span id="recommendation-header-btn" className="section-header-btn">
        Recommendations
      </span>
      <section className="recommendations-section">
        <Slider {...settings}>
          {recommendations.map((recommendation, index) => (
            <RecommendationCard key={index} recommendation={recommendation} />
          ))}
        </Slider>
      </section>
    </div>
  );
};

const RecommendationCard = ({ recommendation }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="recommendation-card">
      <img
        src={recommendation.image}
        alt={recommendation.name}
        className="recommendation-image"
      />
      <p className="recommendation-feedback">
        &ldquo;
        {showMore
          ? recommendation.feedback
          : `${recommendation.feedback.substring(0, 200)}...`}
        <span onClick={toggleShowMore} className="see-more">
          {showMore ? "See Less" : "See More"}
        </span>
        &rdquo;{" "}
      </p>
      <p className="recommendation-name">{recommendation.name}</p>
      <p className="recommendation-position">
        {recommendation.position} at {recommendation.company}
      </p>
      <a
        href={recommendation.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="recommendation-linkedin"
      >
        {recommendation.name}&#39;s LinkedIn
      </a>
    </div>
  );
};

RecommendationCard.propTypes = {
  recommendation: PropTypes.shape({
    image: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} slick-arrow`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <i className="fas fa-chevron-right"></i>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} slick-arrow`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <i className="fas fa-chevron-left"></i>
  </div>
);

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Recommendations;
