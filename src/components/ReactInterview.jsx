import { questions } from "../data/reactQuestions";
import AdminHeaderButtons from "./AdminHeaderButtons";
import PropTypes from "prop-types";
import Question from "./Question";
import "../styles/QuestionStyles.css";

const ReactInterview = ({ onLogout }) => {
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
        <h2>ReactJS Questions</h2>
        <ul>
          {questions.map((question, index) => (
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
          ReactJS Questions
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
        {questions.map((question, index) => (
          <div id={`question-${question.id}`} key={question.id}>
            <Question
              question={{
                ...question,
                title: `${index + 1}. React: ${question.title}`,
              }}
              note="Please implement the solution as a React component and ensure that it meets all the above requirements."
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ReactInterview.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default ReactInterview;
