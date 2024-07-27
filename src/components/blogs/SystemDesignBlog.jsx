import '../../App.css';

const SystemDesignBlog = () => {
  const qnaList = [
    {
      question: "When the System Design Content will be live?",
      answer: "System Design still not started learning. Will be writing stuffs once understanding design principles and working....",
    },
    
];

    return (
      <div className='blog-container'>
        <h1 className='blog-header'>System Design Blog</h1>
        {qnaList.map((qa, index) => (
          <div key={index} className='blog-qaContainer'>
            <h2 className='blog-question'>{qa.question}</h2>
            <p className='blog-answer'>{qa.answer}</p>
          </div>
        ))}
      </div>
    );
  };

export default SystemDesignBlog;