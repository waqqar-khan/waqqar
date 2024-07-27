import '../../App.css';

const SystemDesignBlog = () => {
  const qnaList = [
    {
      question: "When the System Design Content will be live?",
      answer: "Coming Soooon....",
    },
    
];

    return (
      <div className="w-full max-w-4xl mx-auto p-5 font-sans mt-20">
      <h1 className="text-3xl text-center text-red-700 font-bold pt-6 pb-8">SYSTEM DESIGN BlOG</h1>
      {qnaList.map((qa, index) => (
        <div key={index} className="mb-5 pb-3 border-b border-gray-300">
          <h2 className="text-lg text-gray-800">{qa.question}</h2>
          <p className="text-gray-600">{qa.answer}</p>
        </div>
      ))}
    </div>
    );
  };

export default SystemDesignBlog;