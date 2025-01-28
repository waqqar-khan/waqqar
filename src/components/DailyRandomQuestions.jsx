import { questions } from '../data/reactQuestions';
import { javaScriptQuestions } from '../data/javaScriptQuestions';
import Question from './Question';

const getRandomQuestions = () => {
    const combinedQuestions = [
        ...questions.sort(() => Math.random() - 0.5).slice(0, 2),
        ...javaScriptQuestions.sort(() => Math.random() - 0.5).slice(0, 2),
    ];
    return combinedQuestions.sort(() => Math.random() - 0.5);
};

const DailyRandomQuestions = () => {
    const randomQuestions = getRandomQuestions();

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });

    const ordinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const todayDate = `${day}${ordinalSuffix(day)} ${month}`;

    const pageContainerStyle = {
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5rem',
    };

    const headingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '3rem',
        lineHeight: '1.5',
        color: '#7E22AE',
    };

    const questionsContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        padding: '10px',
    };

    const questionStyle = {
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#7E22CE',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
    };

    const responsiveHeadingStyle = {
        ...headingStyle,
        '@media (max-width: 600px)': {
            fontSize: '1.5rem',
        },
    };

    const responsiveQuestionStyle = {
        ...questionStyle,
        '@media (max-width: 600px)': {
            padding: '10px',
        },
    };

    return (
        <div style={pageContainerStyle}>
            <h1 style={responsiveHeadingStyle}>
                Today&apos;s [{todayDate}] Random Questions
            </h1>
            <div style={questionsContainerStyle}>
                {randomQuestions.map((question) => (
                    <div key={question.id} style={responsiveQuestionStyle}>
                        <Question question={question} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyRandomQuestions;
