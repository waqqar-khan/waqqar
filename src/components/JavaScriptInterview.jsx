import { javaScriptQuestions } from "../data/javaScriptQuestions";
import Question from "./Question";
import "../styles/QuestionStyles.css";

const JavaScriptInterview = () => {
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
                <h2>JavaScript Questions</h2>
                <ul>
                    {javaScriptQuestions.map((question) => (
                        <li key={question.id} onClick={() => handleScrollToQuestion(question.id)}>
                            {question.title.split(":")[1]?.trim() || question.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="questions-container">
                {javaScriptQuestions.map((question) => (
                    <div id={`question-${question.id}`} key={question.id}>
                        <Question question={question} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JavaScriptInterview;
