import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Confetti from "react-confetti";
import { questions as reactInterviewQuestions } from "../data/reactQuestions";
import { javaScriptQuestions as javascriptInterviewQuestions } from "../data/javaScriptQuestions";
import Question from "./Question";
import AdminHeaderButtons from "./AdminHeaderButtons";
import "../styles/PracticeInterviewCode.css";
import "../styles/Login.css";

const PracticeInterviewCode = ({ onLogout }) => {
  const [reactIndex, setReactIndex] = useState(reactInterviewQuestions.length - 1);
  const [jsIndex, setJsIndex] = useState(javascriptInterviewQuestions.length - 1);
  const [reactSolved, setReactSolved] = useState(false);
  const [jsSolved, setJsSolved] = useState(false);
  const [reactButtonText, setReactButtonText] = useState("Solved");
  const [jsButtonText, setJsButtonText] = useState("Solved");
  const [reactButtonHovered, setReactButtonHovered] = useState(false);
  const [jsButtonHovered, setJsButtonHovered] = useState(false);
  const reactQuestionRef = useRef(null);
  const jsQuestionRef = useRef(null);
  const [reactDimensions, setReactDimensions] = useState({ width: 0, height: 0 });
  const [jsDimensions, setJsDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (reactSolved && reactQuestionRef.current) {
      setReactDimensions({
        width: reactQuestionRef.current.clientWidth,
        height: reactQuestionRef.current.clientHeight + 50,
      });
    }
  }, [reactSolved]);

  useEffect(() => {
    if (jsSolved && jsQuestionRef.current) {
      setJsDimensions({
        width: jsQuestionRef.current.clientWidth,
        height: jsQuestionRef.current.clientHeight + 50,
      });
    }
  }, [jsSolved]);

  const handleReactSolved = () => {
    setReactButtonText("Moving to Next Question...");
    setReactSolved(true);
    setReactButtonHovered(true);
    setTimeout(() => {
      setReactIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : reactInterviewQuestions.length - 1));
      setReactSolved(false);
      setReactButtonText("Solved");
      setReactButtonHovered(false);
    }, 3000);
  };

  const handleJsSolved = () => {
    setJsButtonText("Moving to Next Question...");
    setJsSolved(true);
    setJsButtonHovered(true);
    setTimeout(() => {
      setJsIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : javascriptInterviewQuestions.length - 1));
      setJsSolved(false);
      setJsButtonText("Solved");
      setJsButtonHovered(false);
    }, 3000);
  };

  return (
    <div className="container">
      <section className="header">
        <h1 className="title">Interview Questions</h1>
        <div className="headerButtons">
          <AdminHeaderButtons />
          <button onClick={onLogout} className="adminPage-logout-button" style={{ marginTop: "-5px" }}>
            Logout
          </button>
        </div>
      </section>

      <div className="sectionsContainer">
        <section className="section">
          <h2 className="sectionHeader">React Interview</h2>
          <div ref={reactQuestionRef} className="questionArea">
            <div className="questionContainer">
              <Question question={reactInterviewQuestions[reactIndex]} />
            </div>
            {reactSolved && (
              <div className="congratsOverlay">
                <Confetti width={reactDimensions.width} height={reactDimensions.height} numberOfPieces={300} recycle={false} />
                <p className="congratsMessage">Congratulations!</p>
              </div>
            )}
          </div>
          <button
            onClick={handleReactSolved}
            className={`solvedButton ${reactButtonHovered || reactSolved ? "hoverActive" : ""}`}
            onMouseEnter={() => setReactButtonHovered(true)}
            onMouseLeave={() => setReactButtonHovered(false)}
          >
            {reactButtonText}
          </button>
        </section>

        <section className="section">
          <h2 className="sectionHeader">JavaScript Interview</h2>
          <div ref={jsQuestionRef} className="questionArea">
            <div className="questionContainer">
              <Question question={javascriptInterviewQuestions[jsIndex]} />
            </div>
            {jsSolved && (
              <div className="congratsOverlay">
                <Confetti width={jsDimensions.width} height={jsDimensions.height} numberOfPieces={300} recycle={false} />
                <p className="congratsMessage">Congratulations!</p>
              </div>
            )}
          </div>
          <button
            onClick={handleJsSolved}
            className={`solvedButton ${jsButtonHovered || jsSolved ? "hoverActive" : ""}`}
            onMouseEnter={() => setJsButtonHovered(true)}
            onMouseLeave={() => setJsButtonHovered(false)}
          >
            {jsButtonText}
          </button>
        </section>
      </div>
    </div>
  );
};

PracticeInterviewCode.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default PracticeInterviewCode;
