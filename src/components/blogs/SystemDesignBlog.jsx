import "../../App.css";

const SystemDesignBlog = () => {
  const qnaList = [
    {
      question:
        "What are microservices and how do they differ from monolithic architecture?",
      answer:
        "Microservices are a design pattern where an application is composed of small, independent services that communicate over APIs. This contrasts with monolithic architecture, where the entire application is built as a single, unified unit.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-red-700 font-serif font-semibold pb-8">
        SYSTEM DESIGN BlOG
      </h1>
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
