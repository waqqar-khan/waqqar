import "../../App.css";
import BlogButton from "./BlogButton";

const JavaScriptBlog = () => {
  const qnaList = [
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
      answer:
        "`==` performs type coercion before comparison, meaning it converts the values to the same type before comparing. `===` (strict equality) compares both the value and the type without type conversion.",
    },
    {
      question: "What are closures in JavaScript?",
      answer:
        "Closures are functions that retain access to their lexical scope even when the function is executed outside that scope. This allows for private variables and functions.",
    },
    {
      question: "What is event delegation in JavaScript?",
      answer:
        "Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child element. This is achieved using event bubbling.",
    },
    {
      question: "How does JavaScript's `this` keyword work?",
      answer:
        "`this` refers to the object that is executing the current function. Its value depends on how the function is called: globally, as an object method, or using `call`, `apply`, or `bind`.",
    },
    {
      question: "What is the difference between `null` and `undefined`?",
      answer:
        "`null` is an explicit assignment of no value, while `undefined` represents a variable that has been declared but not yet assigned a value.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 pt-12 font-sans mt-14">
      <BlogButton />
      <h1 className="italic text-2xl text-center text-red-700 font-mono font-semibold pb-8">
        JAVASCRIPT BlOG
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

export default JavaScriptBlog;
