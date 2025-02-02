import { useState, useEffect, useMemo } from "react";
import { questions } from "../data/reactQuestions";
import { javaScriptQuestions } from "../data/javaScriptQuestions";
import AdminHeaderButtons from "./AdminHeaderButtons";
import PropTypes from "prop-types";
import Question from "./Question";

const getRandomQuestions = () => {
  const combinedQuestions = [
    ...questions.sort(() => Math.random() - 0.5).slice(0, 2),
    ...javaScriptQuestions.sort(() => Math.random() - 0.5).slice(0, 2),
  ];
  return combinedQuestions.sort(() => Math.random() - 0.5);
};

const DailyRandomQuestions = ({ onLogout }) => {
  const [randomQuestions, setRandomQuestions] = useState([]);

  const todayDate = useMemo(() => {
    const todayObj = new Date();
    const day = todayObj.getDate();
    const month = todayObj.toLocaleString("default", { month: "short" });

    const ordinalSuffix = (day) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${ordinalSuffix(day)} ${month}`;
  }, []);

  useEffect(() => {
    const lastUpdatedDate = localStorage.getItem("lastUpdatedDate");
    const currentDate = new Date().toDateString();

    if (lastUpdatedDate !== currentDate) {
      const newQuestions = getRandomQuestions();
      setRandomQuestions(newQuestions);
      localStorage.setItem("randomQuestions", JSON.stringify(newQuestions));
      localStorage.setItem("lastUpdatedDate", currentDate);
    } else {
      const storedQuestions = JSON.parse(
        localStorage.getItem("randomQuestions")
      );
      setRandomQuestions(storedQuestions || []);
    }
  }, [todayDate]);

  const pageContainerStyle = {
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5rem",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "3rem",
    lineHeight: "1.5",
    color: "#7E22AE",
  };

  const questionsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "800px",
    width: "100%",
    margin: "0 auto",
    padding: "10px",
  };

  const questionStyle = {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#7E22CE",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  };

  const responsiveHeadingStyle = {
    ...headingStyle,
    "@media (maxWidth: 600px)": {
      fontSize: "1.5rem",
    },
  };

  const responsiveQuestionStyle = {
    ...questionStyle,
    "@media (maxWidth: 600px)": {
      padding: "10px",
    },
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={responsiveHeadingStyle}>
        Today&apos;s [{todayDate}] Random Questions
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
      </h1>
      <div style={questionsContainerStyle}>
        {randomQuestions.map((question, index) => (
          <div key={index} style={responsiveQuestionStyle}>
            <Question question={question} />
          </div>
        ))}
      </div>
    </div>
  );
};

DailyRandomQuestions.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default DailyRandomQuestions;
