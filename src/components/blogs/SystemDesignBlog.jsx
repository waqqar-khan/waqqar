import "../../App.css";
import BlogButton from "./BlogButton";

const SystemDesignBlog = () => {
  const qnaList = [
    {
      question: "When the System Design Content will be live?",
      answer: "Coming Soooon....",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 pt-12 font-sans mt-14">
      <BlogButton />
      <h1 className="italic text-2xl text-center text-red-700 font-mono font-semibold pb-8">
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
