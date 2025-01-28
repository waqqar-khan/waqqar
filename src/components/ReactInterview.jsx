import { questions } from '../data/questions';
import Question from './Question';
import '../styles/QuestionStyles.css';


const ReactInterview = () => {
    return (
        <div className="questions-container">
            {questions.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
};

export default ReactInterview;
