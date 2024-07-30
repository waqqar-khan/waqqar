import "../../App.css";

const ReactJSBlog = () => {
  const reactQnaList = [
    {
      question: "How does the virtual DOM in React enhance performance?",
      answer:
        "The virtual DOM reduces the number of direct manipulations to the real DOM by batching updates, calculating the minimal set of changes needed, and applying them efficiently.",
    },
    {
      question: "What is reconciliation in React?",
      answer:
        "Reconciliation is the process by which React updates the DOM by comparing the current and previous virtual DOM trees and applying only the necessary changes.",
    },
    {
      question: "How does React handle state immutability?",
      answer:
        "React encourages state immutability to ensure predictable state changes and efficient rendering, as it enables quick comparisons to detect changes.",
    },
    {
      question: "What is the role of the React.createElement function?",
      answer:
        "React.createElement creates and returns a React element, which is a lightweight representation of a DOM element.",
    },
    {
      question: "Why is it important to use the key prop in lists?",
      answer:
        "The key prop helps React identify which items have changed, been added, or removed, optimizing the rendering process by ensuring efficient updates.",
    },
    {
      question: "What are controlled components in React?",
      answer:
        "Controlled components are form elements that are controlled by React state, ensuring that the component's state is the single source of truth.",
    },
    {
      question: "What are uncontrolled components in React?",
      answer:
        "Uncontrolled components manage their own state internally, using refs to access the DOM elements and their values directly.",
    },
    {
      question:
        "How do you pass data from a parent to a child component in React?",
      answer:
        "Data is passed from a parent to a child component using props, which are read-only and allow for dynamic data binding.",
    },
    {
      question: "What is the useState hook used for?",
      answer:
        "The useState hook allows functional components to manage state by returning a state variable and a function to update it.",
    },
    {
      question: "What is the useEffect hook used for?",
      answer:
        "The useEffect hook allows functional components to perform side effects, such as data fetching or subscriptions, and clean up after them.",
    },
    {
      question: "How do you handle conditional rendering in React?",
      answer:
        "Conditional rendering in React can be handled using JavaScript conditional operators like if, else, ternary operators, or logical && operator.",
    },
    {
      question: "What is the Context API in React?",
      answer:
        "The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.",
    },
    {
      question: "How does the useContext hook work?",
      answer:
        "The useContext hook allows functional components to consume values from a context without needing to use a Consumer component.",
    },
    {
      question: "What is the purpose of React.memo?",
      answer:
        "React.memo is a higher-order component that memoizes the rendered output of a component, preventing unnecessary re-renders when the props haven't changed.",
    },
    {
      question: "How does the useReducer hook differ from useState?",
      answer:
        "The useReducer hook is used for managing complex state logic and state transitions, providing a more predictable way to handle state compared to useState.",
    },
    {
      question: "What is the purpose of useRef in React?",
      answer:
        "useRef creates a mutable object that persists across renders, allowing direct access to DOM elements or storing mutable values.",
    },
    {
      question: "How do you optimize React application performance?",
      answer:
        "React performance can be optimized by memoizing components, using React.lazy for code splitting, optimizing re-renders, and using useMemo and useCallback hooks.",
    },
    {
      question: "What is the difference between props and state in React?",
      answer:
        "Props are read-only data passed from parent to child components, while state is a local, mutable data source managed within the component.",
    },
    {
      question: "How do you handle events in React?",
      answer:
        "Events in React are handled by passing event handlers as props to elements, using camelCase syntax for event names.",
    },
    {
      question: "What is the purpose of the useCallback hook?",
      answer:
        "useCallback memoizes a function so that it is only recreated when its dependencies change, optimizing performance by preventing unnecessary re-renders.",
    },
    {
      question: "How do you perform form validation in React?",
      answer:
        "Form validation in React can be performed using controlled components, custom validation functions, or libraries like Formik and Yup.",
    },
    {
      question: "What is the purpose of React's Error Boundaries?",
      answer:
        "Error Boundaries catch JavaScript errors in their child component tree, logging the errors and displaying a fallback UI to prevent the entire app from crashing.",
    },
    {
      question: "How do you create higher-order components (HOC) in React?",
      answer:
        "A higher-order component is a function that takes a component and returns a new component, adding additional props or logic to the original component.",
    },
    {
      question: "What are React fragments and when would you use them?",
      answer:
        "React fragments allow you to group multiple elements without adding extra nodes to the DOM, which is useful when returning multiple elements from a component.",
    },
    {
      question:
        "What is the significance of the componentDidMount lifecycle method?",
      answer:
        "componentDidMount is called after a component is rendered to the DOM, often used for initial data fetching or setting up subscriptions.",
    },
    {
      question: "How does server-side rendering (SSR) work in React?",
      answer:
        "SSR renders React components on the server, sending the fully rendered HTML to the client, improving performance and SEO for initial page loads.",
    },
    {
      question: "What is React Hydration?",
      answer:
        "Hydration is the process of attaching React's event listeners to the static HTML generated by server-side rendering, making the page interactive.",
    },
    {
      question: "How do you manage side effects in React?",
      answer:
        "Side effects in React are managed using the useEffect hook in functional components or lifecycle methods in class components.",
    },
    {
      question: "What is the role of ReactDOM in a React application?",
      answer:
        "ReactDOM is responsible for rendering React components to the DOM and managing updates to the DOM when component state or props change.",
    },
    {
      question: "How do you use React Portals?",
      answer:
        "React Portals allow you to render components outside the main DOM hierarchy, useful for modals, tooltips, or overlays.",
    },
    {
      question: "What are synthetic events in React?",
      answer:
        "Synthetic events are React's cross-browser wrapper around native events, providing a consistent API for event handling across different browsers.",
    },
    {
      question: "How do you handle asynchronous operations in React?",
      answer:
        "Asynchronous operations in React are handled using promises, async/await syntax, and the useEffect hook for side effects like data fetching.",
    },
    {
      question: "What is the significance of the useLayoutEffect hook?",
      answer:
        "useLayoutEffect is similar to useEffect but fires synchronously after all DOM mutations, useful for reading layout and synchronously re-rendering.",
    },
    {
      question: "What is code splitting in React?",
      answer:
        "Code splitting is a technique to split code into smaller bundles, which can be loaded on demand, improving the initial load time of the application.",
    },
    {
      question: "How does lazy loading work in React?",
      answer:
        "Lazy loading in React is achieved using React.lazy and Suspense, allowing components to be loaded only when they are needed.",
    },
    {
      question:
        "What are the differences between React.Component and React.PureComponent?",
      answer:
        "React.PureComponent performs a shallow comparison of props and state to optimize rendering, whereas React.Component does not include this optimization by default.",
    },
    {
      question: "How do you update state based on the previous state in React?",
      answer:
        "To update state based on the previous state, pass a function to the state setter, which receives the previous state and returns the new state.",
    },
    {
      question: "What is Prop Drilling and how can it be avoided?",
      answer:
        "Prop drilling refers to passing props through multiple layers of components. It can be avoided using the Context API or state management libraries like Redux.",
    },
    {
      question: "What are custom hooks in React?",
      answer:
        "Custom hooks are reusable functions that encapsulate common logic using React hooks, promoting code reuse across multiple components.",
    },
    {
      question: "What is the purpose of the React.StrictMode component?",
      answer:
        "React.StrictMode is a tool for highlighting potential problems in an application, such as detecting unsafe lifecycle methods and legacy API usage.",
    },
    {
      question:
        "How do you handle performance optimization in large React applications?",
      answer:
        "Performance optimization in large React applications can be achieved by using React.memo, useCallback, useMemo, code splitting, and avoiding unnecessary re-renders.",
    },
    {
      question: "What are React portals and when would you use them?",
      answer:
        "React portals are used to render children into a DOM node that exists outside the DOM hierarchy of the parent component, useful for modals and tooltips.",
    },
    {
      question: "How does the useImperativeHandle hook work?",
      answer:
        "useImperativeHandle customizes the instance value exposed when using ref, useful for creating custom APIs for imperative code in functional components.",
    },
    {
      question:
        "What is the significance of the key attribute in dynamic lists?",
      answer:
        "The key attribute is crucial for helping React identify which items have changed, been added, or removed, optimizing the rendering process.",
    },
    {
      question: "How do you manage global state in a React application?",
      answer:
        "Global state in a React application can be managed using Context API, Redux, or other state management libraries like MobX or Recoil.",
    },
    {
      question: "What is the difference between useEffect and useLayoutEffect?",
      answer:
        "useEffect runs asynchronously and after paint, while useLayoutEffect runs synchronously after all DOM mutations but before paint.",
    },
    {
      question: "What is the purpose of the defaultProps in React components?",
      answer:
        "defaultProps define default values for props in a component, ensuring that the component has sensible defaults if no props are passed.",
    },
    {
      question: "How do you handle error boundaries in functional components?",
      answer:
        "Error boundaries in functional components can be handled using a combination of try-catch blocks and the ErrorBoundary component for capturing errors in child components.",
    },
    {
      question: "What are render props in React?",
      answer:
        "Render props is a pattern for sharing code between components using a prop whose value is a function that returns a React element.",
    },
    {
      question: "How do you handle side effects in functional components?",
      answer:
        "Side effects in functional components are handled using the useEffect hook, which allows you to perform actions like data fetching or subscriptions.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
        REACT JS BLOG
      </h1>
      {reactQnaList.map((qa, index) => (
        <div key={index} className="mb-5 pb-3 border-b border-gray-300">
          <h2 className="text-lg text-black">{qa.question}</h2>
          <p className="text-gray-600">{qa.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ReactJSBlog;
