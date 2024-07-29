import HackerRank from "../assets/hackerrank.png";
import CSPO from "../assets/cspo.jpg";

const Certificates = () => {
  return (
    <section id="certificates" className="certificate-section">
      <span className="section-header-btn bg-purple-600 text-white">Certificates</span>
      <div className="certificate-container m-4">
        <div className="bg-purple-500 rounded-lg p-4 shadow-lg">
          <img
            className="cert-img"
            src={HackerRank}
            alt="HackerRank React Certificate"
          />
        </div>
        <div className="bg-purple-500 rounded-lg p-4 shadow-lg">
          <img className="cert-img" src={CSPO} alt="CSPO Certificate" />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
