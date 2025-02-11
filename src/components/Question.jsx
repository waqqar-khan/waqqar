import PropTypes from "prop-types";
import "../styles/QuestionStyles.css";
import { useState } from "react";

const Question = ({ question, note }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const questionContent = `
      ${question.title}
  
      ${question.description}
  
      ${question.sections
        .map((section) => `${section.title}: ${section.items.join(", ")}`)
        .join("\n")}
  
      Expected Behavior:
      ${question.expectedBehavior.join("\n")}
    `;

    navigator.clipboard
      .writeText(questionContent)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => alert("Failed to copy!"));
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <h2 className="question-title text-select">{question.title}</h2>
        <button className="copy-button" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="question-description text-select">{question.description}</p>

      {question.sections.map((section) => (
        <div key={section.title} className="question-section">
          <h3 className="section-title text-select">{section.title}</h3>
          <ul className="requirements-list">
            {section.items.map((item) => (
              <li key={item} className="text-select">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="question-section">
        <h3 className="section-title text-select">Expected Behavior:</h3>
        <ul className="requirements-list">
          {question.expectedBehavior.map((behavior) => (
            <li key={behavior} className="text-select">
              {behavior}
            </li>
          ))}
        </ul>
      </div>

      {note && <p className="question-note text-select">{note}</p>}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    expectedBehavior: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  note: PropTypes.string,
};

Question.defaultProps = {
  note: "",
};

export default Question;
