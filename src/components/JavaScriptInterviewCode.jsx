import { javaScriptQuestions } from "../data/javaScriptQuestions";
import AdminHeaderButtons from "./AdminHeaderButtons";
import Question from "./Question";
import PropTypes from "prop-types";
import "../styles/QuestionStyles.css";

const JavaScriptInterviewCode = ({ onLogout }) => {
  const handleScrollToQuestion = (id) => {
    const questionElement = document.getElementById(`question-${id}`);
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    questionElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.scrollBy(0, -headerHeight);
  };

  return (
    <div className="page-container">
      <div className="sidebar">
        <h2 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
          JavaScript Questions
        </h2>
        <ul>
          {javaScriptQuestions.map((question, index) => (
            <li
              key={question.id}
              onClick={() => handleScrollToQuestion(question.id)}
            >
              {`${index + 1}. ${
                question.title.split(":")[1]?.trim() || question.title
              }`}
            </li>
          ))}
        </ul>
      </div>
      <div className="questions-container">
        <h2 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-4">
          JavaScript Questions
          <span
            style={{
              marginLeft: "4rem",
              display: "inline-flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <AdminHeaderButtons />
            <button
              onClick={onLogout}
              style={{
                position: "relative",
                top: "-10px",
                padding: "0.5rem 1rem",
              }}
              className="adminPage-logout-button"
            >
              Logout
            </button>
          </span>
        </h2>
        {javaScriptQuestions.map((question, index) => (
          <div id={`question-${question.id}`} key={question.id}>
            <Question
              question={{
                ...question,
                title: `${index + 1}. JavaScript: ${question.title}`,
              }}
              note="Please implement the solution in JavaScript and ensure that it meets all the above requirements."
            />
          </div>
        ))}
      </div>
    </div>
  );
};

JavaScriptInterviewCode.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default JavaScriptInterviewCode;
