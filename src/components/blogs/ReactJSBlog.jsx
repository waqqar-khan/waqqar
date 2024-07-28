import "../../App.css";

const ReactJSBlog = () => {
  const qnaList = [
    {
      question: "What are the most costly operations in React?",
      answer:
        "The most costly operations occur when the DOM tree needs to change in our browser (e.g., you click a button and something pops up).",
    },
    {
      question: "What is npx used for in React?",
      answer: "npx is used to execute a respective package.",
    },
    {
      question:
        "How does parcel support older browsers and remove unwanted code?",
      answer:
        "Parcel supports older browsers through differential bundling and tree shaking, which removes unwanted code. Additionally, inside package.json, you can add a browserslist and specify different browser versions that need to be supported.",
    },
    {
      question: "What does JSX do in React?",
      answer:
        "JSX is a syntax extension that allows writing HTML elements in JavaScript. It gets transpiled by Babel into React elements, which are JavaScript objects, and then rendered into the DOM as HTML.",
    },
    {
      question:
        "How do functional components differ from class components in React?",
      answer:
        "Functional components are simpler, being just JavaScript functions that return JSX. They do not have lifecycle methods or state by default but can use hooks for state and lifecycle features.",
    },
    {
      question: "What are props in React and how are they used?",
      answer:
        "Props are arguments passed into React components, allowing dynamic data to be passed and used within the component. They are JavaScript objects and can be destructured for easy access.",
    },
    {
      question: "Why is the key prop important in lists?",
      answer:
        "The key prop helps React identify which items have changed, been added, or removed, optimizing the rendering process. Each key should be unique to avoid performance issues and errors.",
    },
    {
      question: "What are React hooks and why are they used?",
      answer:
        "React hooks are functions that let you use state and other React features in functional components. For example, useState allows you to add state to a functional component.",
    },
    {
      question: "Why do we need unique keys in lists in React?",
      answer:
        "React cleans the container with the same level of items and re-renders all items, even if only one item is added to the list, because React is unable to find which element is added. If we have a unique ID, React knows which items were already present and which new item is added, and it will only render this new item, not the pre-existing items. This produces huge optimization, especially for infinite scrolls or lists with hundreds of components.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-red-700 font-serif font-semibold pb-8">
        REACT JS BLOG
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

export default ReactJSBlog;
