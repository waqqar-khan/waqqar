import { questions } from '../data/questions';
import Question from './Question';
import '../styles/QuestionStyles.css';

const ReactInterview = () => {
    const handleScrollToQuestion = (id) => {
        const questionElement = document.getElementById(`question-${id}`);
        const headerHeight = document.querySelector('header')?.offsetHeight || 0; // Adjust this for the actual header element
        questionElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        window.scrollBy(0, -headerHeight); // Adjust for the header height
    };

    return (
        <div className="page-container">
            <div className="sidebar">
                <h2>Questions</h2>
                <ul>
                    {questions.map((question) => (
                        <li key={question.id} onClick={() => handleScrollToQuestion(question.id)}>
                            {question.title.split(':')[1]?.trim() || question.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="questions-container">
                {questions.map((question) => (
                    <div id={`question-${question.id}`} key={question.id}>
                        <Question question={question} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReactInterview;
