import { questions } from '../data/reactQuestions';
import Question from './Question';
import '../styles/QuestionStyles.css';

const ReactInterview = () => {
    const handleScrollToQuestion = (id) => {
        const questionElement = document.getElementById(`question-${id}`);
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        questionElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        window.scrollBy(0, -headerHeight);
    };

    return (
        <div className="page-container">
            <div className="sidebar">
                <h2>ReactJS Questions</h2>
                <ul>
                    {questions.map((question, index) => (
                        <li key={question.id} onClick={() => handleScrollToQuestion(question.id)}>
                            {`${index + 1}. ${question.title.split(':')[1]?.trim() || question.title}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="questions-container">
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

export default ReactInterview;
