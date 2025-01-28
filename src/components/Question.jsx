import PropTypes from "prop-types";
import "../styles/QuestionStyles.css";

const Question = ({ question, note }) => {
  return (
    <div className="question-container">
      <h2 className="question-title" style={{ userSelect: "text" }}>
        {question.title}
      </h2>
      <p className="question-description" style={{ userSelect: "text" }}>
        {question.description}
      </p>

      {question.sections.map((section, secIndex) => (
        <div key={secIndex} className="question-section">
          <h3 className="section-title" style={{ userSelect: "text" }}>
            {section.title}
          </h3>
          <ul className="requirements-list">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} style={{ userSelect: "text" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="question-section">
        <h3 className="section-title" style={{ userSelect: "text" }}>
          Expected Behavior:
        </h3>
        <ul className="requirements-list">
          {question.expectedBehavior.map((behavior, behaviorIndex) => (
            <li key={behaviorIndex} style={{ userSelect: "text" }}>
              {behavior}
            </li>
          ))}
        </ul>
      </div>

      <p className="question-note" style={{ userSelect: "text" }}>
        {note}
      </p>
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

export default Question;
