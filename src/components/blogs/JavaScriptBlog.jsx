import '../../App.css';

const JavaScriptBlog = () => {
  const qnaList = [
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
      answer: "`==` performs type coercion before comparison, meaning it converts the values to the same type before comparing. `===` (strict equality) compares both the value and the type without type conversion.",
    },
    {
      question: "What are closures in JavaScript?",
      answer: "Closures are functions that retain access to their lexical scope even when the function is executed outside that scope. This allows for private variables and functions.",
    },
    {
      question: "What is event delegation in JavaScript?",
      answer: "Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child element. This is achieved using event bubbling.",
    },
    {
      question: "How does JavaScript's `this` keyword work?",
      answer: "`this` refers to the object that is executing the current function. Its value depends on how the function is called: globally, as an object method, or using `call`, `apply`, or `bind`.",
    },
    {
      question: "What is the difference between `null` and `undefined`?",
      answer: "`null` is an explicit assignment of no value, while `undefined` represents a variable that has been declared but not yet assigned a value.",
    },

];

    return (
      <div className='blog-container'>
        <h1 className='blog-header'>JavaScript Blog</h1>
        {qnaList.map((qa, index) => (
          <div key={index} className='blog-qaContainer'>
            <h2 className='blog-question'>{qa.question}</h2>
            <p className='blog-answer'>{qa.answer}</p>
          </div>
        ))}
      </div>
    );
  };

export default JavaScriptBlog;