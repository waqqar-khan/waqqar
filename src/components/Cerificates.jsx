import HackerRank from "../assets/hackerrank.png";
import CSPO from "../assets/cspo.jpg";

const Certificates = () => {
  return (
    <section id="certificates" className="certificate-section">
      <span className="section-header-btn">Certificates</span>
      <div className="certificate-container mr-4 ml">
        <img
          className="cert-img"
          src={HackerRank}
          alt="HackerRank React Certificate"
        />
        <img className="cert-img" src={CSPO} alt="CSPO Certificate" />
      </div>
    </section>
  );
};

export default Certificates;
