import { useState } from "react";
import "../../App.css";

import Pagination from "../../feature/Pagination";
import usePagination from "../../hooks/usePagination";
import Accordion from "../../feature/Accordion";

const MiscellaneousBlog = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const miscellaneousQnaList = [
    // **HTML**
    {
      question: "What are semantic HTML elements and why are they important?",
      answer:
        "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. Examples include <header>, <footer>, <article>, and <section>. They improve accessibility, SEO, and code readability by providing meaningful structure and context to the content, making it easier for search engines and assistive technologies to understand and process the information.",
        category: "HTML",
    },
    {
      question:
        "How does the HTML5 `data-*` attribute work, and when should it be used?",
      answer:
        "The `data-*` attribute allows developers to store custom data on HTML elements. It is used to embed extra information that can be accessed via JavaScript. For example, <div data-user-id='123'> can be used to store a user ID. This attribute helps in keeping HTML and JavaScript concerns separate and provides a way to store and retrieve data without affecting the DOM structure or functionality.",
        category: "HTML",
    },
    {
      question:
        "What is the purpose of the `alt` attribute in HTML images, and why is it important?",
      answer:
        "The `alt` attribute provides alternative text for an image if it cannot be displayed. It is crucial for accessibility as it allows screen readers to describe the image to visually impaired users. Additionally, it improves SEO by giving search engines context about the image's content. Properly describing the image with meaningful text ensures that all users have access to the information conveyed by images.",
        category: "HTML",
    },
    {
      question:
        "How does HTML5 support multimedia content and what elements are used?",
      answer:
        "HTML5 introduced native support for multimedia content with elements like `<video>` and `<audio>`. The `<video>` element is used to embed video files, while the `<audio>` element is used for audio files. These elements support multiple formats and provide attributes for controlling playback, such as `controls`, `autoplay`, and `loop`. They simplify the inclusion of multimedia content without relying on third-party plugins.",
        category: "HTML",
    },
    {
      question:
        "What are data attributes and how can they be used effectively in HTML?",
      answer:
        "Data attributes are used to store custom data on HTML elements using the `data-*` attribute. They are useful for attaching additional information to elements without affecting the DOM structure. For example, `<button data-action='submit'>Submit</button>` allows you to store the action associated with the button. Data attributes can be accessed and manipulated via JavaScript, enabling dynamic interactions based on the stored data.",
        category: "HTML",
    },

    // **CSS**
    {
      question:
        "What is the CSS Flexbox model, and how does it help in layout design?",
      answer:
        "CSS Flexbox is a one-dimensional layout model that provides an efficient way to distribute space and align items within a container. It helps in creating responsive layouts by allowing items to grow, shrink, and align easily. Key properties include `display: flex`, `flex-direction`, `justify-content`, `align-items`, and `align-content`, which help in positioning and aligning items along a single axis.",
        category: "CSS",
    },
    {
      question:
        "What are CSS Grid Layouts, and how do they differ from Flexbox?",
      answer:
        "CSS Grid Layouts provide a two-dimensional grid-based layout system, allowing both rows and columns to be controlled simultaneously. Unlike Flexbox, which is one-dimensional, Grid Layouts handle complex layouts and overlapping content efficiently. Key properties include `display: grid`, `grid-template-rows`, `grid-template-columns`, `grid-area`, and `grid-gap`. Grid Layouts are ideal for creating complex web designs and aligning items in both horizontal and vertical dimensions.",
        category: "CSS",
    },
    {
      question:
        "How do CSS variables (custom properties) work and what are their benefits?",
      answer:
        "CSS variables, or custom properties, are entities defined by CSS authors that contain specific values to be reused throughout a document. They are defined using `--variable-name` syntax and accessed with `var(--variable-name)`. Benefits include easier theming, maintainability, and the ability to update variables dynamically via JavaScript. They improve code reusability and consistency across stylesheets.",
        category: "CSS",
    },
    {
      question:
        "What are CSS pseudo-classes and pseudo-elements, and how are they used?",
      answer:
        "CSS pseudo-classes are keywords added to selectors that specify a special state of the selected elements, such as `:hover`, `:focus`, or `:nth-child`. Pseudo-elements, on the other hand, allow you to style specific parts of an element, such as `::before` and `::after`. They are used to enhance styling without adding extra HTML elements, making CSS more powerful and reducing the need for additional markup.",
        category: "CSS",
    },
    {
      question:
        "How can you use CSS animations to enhance user experience on a website?",
      answer:
        "CSS animations allow you to animate transitions between CSS property values, creating visual effects that enhance user experience. You define animations using `@keyframes` and apply them to elements with the `animation` property. Key attributes include `animation-name`, `animation-duration`, `animation-timing-function`, and `animation-delay`. Animations can be used for smooth transitions, hover effects, and interactive elements, improving visual feedback and engagement.",
        category: "CSS",
    },

    // **Git and GitHub**
    {
      question: "How do you resolve merge conflicts in Git?",
      answer:
        "Merge conflicts occur when changes in different branches cannot be automatically reconciled by Git. To resolve conflicts, follow these steps: 1) Use `git merge` or `git pull` to start the merge process. 2) Git will mark the files with conflicts. 3) Open the conflicted files, look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), and manually edit the content to resolve the conflicts. 4) After resolving conflicts, use `git add` to stage the changes. 5) Complete the merge with `git commit`.",
        category: "Git and Github",
    },
    {
      question: "What are Git tags and how are they used?",
      answer:
        "Git tags are used to mark specific points in a repository's history as important, typically for releases or milestones. There are two types of tags: lightweight and annotated. Lightweight tags are simple references to commits, while annotated tags include metadata such as the tagger's name, date, and a message. Tags are created using `git tag <tagname>` for lightweight tags and `git tag -a <tagname> -m \"message\"` for annotated tags. They help in tracking versions and releases in a project.",
        category: "Git and Github",
    },
    {
      question:
        "How does GitHub Actions work for continuous integration and deployment?",
      answer:
        "GitHub Actions is a CI/CD tool integrated with GitHub that allows you to automate workflows directly in your repository. You define workflows using YAML files in the `.github/workflows` directory, specifying triggers (e.g., push, pull request) and jobs. Each job runs in a virtual environment and can execute multiple steps, such as building, testing, and deploying code. GitHub Actions simplifies automation by integrating with your GitHub repository and providing a seamless way to implement CI/CD pipelines.",
        category: "Git and Github",
    },
    {
      question: "What is the difference between Git merge and Git rebase?",
      answer:
        "Git merge combines the histories of two branches, creating a merge commit that preserves the history of both branches. Git rebase, on the other hand, rewrites the commit history by applying changes from one branch onto another, resulting in a linear history. Merge is useful for preserving branch history, while rebase simplifies the commit history but may lead to a loss of context. Rebase should be used with caution, especially on shared branches, as it can alter commit history.",
        category: "Git and Github",
    },
    {
      question:
        "How can you use Git to revert a commit and why might you need to do this?",
      answer:
        "To revert a commit in Git, use the `git revert <commit>` command. This creates a new commit that undoes the changes made by the specified commit, preserving the project history. Reverting is useful for undoing changes that were mistakenly committed or introduced issues. Unlike `git reset`, which alters the commit history, `git revert` maintains a clear history by recording the undo action as a new commit.",
        category: "Git and Github",
    },

    // **Frontend Security**
    {
      question:
        "What are common security vulnerabilities in frontend applications and how can they be mitigated?",
      answer:
        "Common security vulnerabilities in frontend applications include Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and insecure storage. XSS can be mitigated by escaping user input and using Content Security Policy (CSP). CSRF can be prevented by using anti-CSRF tokens and validating them on the server. Insecure storage issues can be addressed by avoiding sensitive data storage in localStorage or sessionStorage and using secure methods for handling data. Regular security audits and updates are crucial for maintaining application security.",
        category: "Frontend Security",
    },
    {
      question: "How does Content Security Policy (CSP) enhance web security?",
      answer:
        "Content Security Policy (CSP) is a security feature that helps prevent various types of attacks, including XSS, by controlling which resources can be loaded and executed by the browser. CSP policies are defined using HTTP headers or `<meta>` tags, specifying allowed sources for scripts, styles, images, and other resources. By enforcing these policies, CSP reduces the risk of malicious content being injected into the web application and helps protect against data breaches and code injection attacks.",
        category: "Frontend Security",
    },
    {
      question:
        "What is Cross-Site Scripting (XSS) and how can you protect against it?",
      answer:
        "Cross-Site Scripting (XSS) is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. To protect against XSS, sanitize and validate user input, escape output when rendering data, and use CSP to restrict the sources of executable scripts. Additionally, frameworks and libraries that automatically handle escaping and sanitization can help mitigate XSS risks.",
        category: "Frontend Security",
    },
    {
      question:
        "What is Cross-Site Request Forgery (CSRF) and how can it be prevented?",
      answer:
        "Cross-Site Request Forgery (CSRF) is an attack where unauthorized commands are transmitted from a user that the web application trusts. To prevent CSRF, use anti-CSRF tokens that are unique to each user session and validate them on the server-side. Implementing same-site cookies and requiring authentication for sensitive actions also help in mitigating CSRF attacks.",
        category: "Frontend Security",
    },
    {
      question: "How do you secure sensitive data in frontend applications?",
      answer:
        "To secure sensitive data in frontend applications, avoid storing sensitive information in localStorage or sessionStorage. Instead, use secure HTTP cookies with attributes such as `HttpOnly`, `Secure`, and `SameSite`. Implement server-side validation and authentication to ensure that sensitive data is accessed and transmitted securely. Additionally, use encryption for any data sent over the network and avoid exposing sensitive data in URLs or client-side code.",
        category: "Frontend Security",
    },

    // **Performance Optimization**
    {
      question: "What techniques can be used to optimize frontend performance?",
      answer:
        "Techniques for optimizing frontend performance include minifying and compressing assets (CSS, JavaScript, and images), using lazy loading for images and components, employing code splitting to load only necessary code, and leveraging browser caching. Additionally, optimizing critical rendering paths, using a Content Delivery Network (CDN), and reducing the number of HTTP requests can further enhance performance. Tools like Lighthouse and WebPageTest can help identify performance bottlenecks and provide recommendations for improvements.",
        category: "Performance Optimization",
    },
    {
      question: "How can you optimize the loading time of a web application?",
      answer:
        "To optimize loading time, you can implement techniques such as minimizing file sizes through minification and compression, using asynchronous loading for JavaScript files, and deferring non-essential scripts. Implementing lazy loading for images and videos, optimizing critical rendering paths, and reducing server response times also contribute to faster loading. Additionally, using efficient image formats, enabling browser caching, and employing server-side rendering (SSR) for dynamic content can significantly improve load times.",
        category: "Performance Optimization",
    },
    {
      question: "What is lazy loading, and how does it improve performance?",
      answer:
        "Lazy loading is a technique that defers the loading of non-essential resources, such as images and components, until they are needed. By loading content only when it comes into the viewport or when it is required, lazy loading reduces the initial page load time and improves overall performance. This approach can be implemented using the `loading='lazy'` attribute for images or by dynamically importing JavaScript modules and components in React applications.",
        category: "Performance Optimization",
    },
    {
      question:
        "How does code splitting contribute to performance optimization?",
      answer:
        "Code splitting is a technique that involves breaking up a large bundle of JavaScript code into smaller, more manageable chunks that can be loaded on demand. This reduces the initial load time by only loading the code necessary for the current view or functionality. Code splitting can be achieved using tools like Webpack or through dynamic imports in modern JavaScript frameworks like React, which help in delivering faster and more responsive applications.",
        category: "Performance Optimization",
    },
    {
      question:
        "What are critical rendering paths, and how can they be optimized?",
      answer:
        "The critical rendering path is the sequence of steps the browser takes to render a web page, including HTML parsing, CSS processing, and JavaScript execution. Optimizing the critical rendering path involves minimizing the amount of work required to render content, such as reducing render-blocking resources, optimizing CSS and JavaScript delivery, and prioritizing the loading of above-the-fold content. Techniques include inlining critical CSS, deferring non-essential JavaScript, and using asynchronous loading for external resources.",
        category: "Performance Optimization",
    },

     // **Debugging**
      {
        question: "What are some common techniques for debugging frontend applications?",
        answer: "Common debugging techniques include using browser developer tools for inspecting HTML, CSS, and JavaScript, setting breakpoints to pause code execution, and using console logging to track variable values and application flow. Tools like React Developer Tools and performance profiling tools help identify bottlenecks. Additionally, error boundaries in React and unit testing can resolve issues.",
        category: "Debugging",
      },
      {
        question: "How do you use browser developer tools to troubleshoot CSS issues?",
        answer: "Browser developer tools help in real-time editing and troubleshooting CSS by inspecting the 'Elements' tab. It shows computed styles, inherited rules, and allows you to modify the styles to test fixes. The 'Console' tab is useful for debugging errors and warnings related to CSS.",
        category: "Debugging",
      },
      {
        question: "What is a breakpoint, and how can you use it effectively in debugging?",
        answer: "A breakpoint is used to pause code execution at a specific line so you can inspect variables and analyze the call stack. In browser developer tools or IDEs, breakpoints help track issues by stepping through code line by line.",
        category: "Debugging",
      },
      {
        question: "What are some best practices for using console.log in debugging?",
        answer: "Use `console.log` to print meaningful messages that provide context. Be descriptive with log messages and variable names. Remove or comment out `console.log` statements before production to avoid performance hits. Logging libraries can be useful for advanced features like log levels.",
        category: "Debugging",
      },
      {
        question: "How can you use React Developer Tools for debugging React applications?",
        answer: "React Developer Tools offers insight into the React component tree, props, state, and hierarchy. It's helpful for debugging by enabling you to track re-renders, measure performance, and directly modify component state for troubleshooting.",
        category: "Debugging",
      },
      {
        question: "How can you debug JavaScript performance issues in the browser?",
        answer: "JavaScript performance issues can be debugged using the 'Performance' tab in browser developer tools. This tool records the runtime performance, CPU usage, and function call details, helping identify performance bottlenecks and optimize slow parts of the code.",
        category: "Debugging",
      },
      {
        question: "What is the role of the network tab in debugging frontend applications?",
        answer: "The 'Network' tab tracks all HTTP requests and responses. It helps debug issues with slow network calls, failed API requests, or incorrect responses, allowing developers to view request details, response times, and errors.",
        category: "Debugging",
      },
      {
        question: "How do you use the Console API for debugging in JavaScript?",
        answer: "The Console API includes methods like `console.log`, `console.error`, and `console.warn` for printing debug messages. `console.table()` displays data in a tabular format, and `console.time()` can help measure function execution time.",
        category: "Debugging",
      },
      {
        question: "What is error boundary in React, and how does it help in debugging?",
        answer: "An error boundary in React is a component that catches JavaScript errors in its child components and displays a fallback UI instead of crashing the app. It's valuable for debugging as it prevents a single error from taking down the entire React tree.",
        category: "Debugging",
      },
      {
        question: "How do you debug asynchronous JavaScript code?",
        answer: "Asynchronous debugging can be done by using breakpoints in asynchronous code and inspecting promises. Additionally, tools like `console.trace()` and the Network tab in developer tools help track async issues like failed API calls.",
        category: "Debugging",
      },
      {
        question: "What is the importance of unit testing in debugging frontend applications?",
        answer: "Unit tests allow you to test isolated functions and components for correctness. Running unit tests early helps identify bugs early, preventing issues from growing in complexity as the application evolves.",
        category: "Debugging",
      },
      {
        question: "What are some common pitfalls when debugging React applications?",
        answer: "Common pitfalls in React debugging include failing to manage state and props updates, missing component lifecycle hooks, and inefficient re-renders. React-specific issues like incorrect hook dependencies can also be tricky to debug.",
        category: "Debugging",
      },
      {
        question: "How can you debug a memory leak in a React application?",
        answer: "To debug memory leaks in React, use the 'Memory' tab in the Chrome DevTools. It allows you to take heap snapshots, track memory allocation, and find components that are not being cleaned up properly.",
        category: "Debugging",
      },
      {
        question: "What tools can help debug frontend performance issues?",
        answer: "Frontend performance issues can be debugged using tools like Chrome DevTools' Performance tab, Lighthouse for performance audits, and React Profiler for React apps. These tools provide insights into load times, rendering performance, and JavaScript execution.",
        category: "Debugging",
      },
      {
        question: "How do you debug issues related to Cross-Origin Resource Sharing (CORS)?",
        answer: "CORS issues can be debugged using the browser's 'Network' tab to check the response headers for `Access-Control-Allow-Origin`. Errors are usually related to missing or misconfigured headers. You can fix them by adjusting the server's CORS policy.",
        category: "Debugging",
      },
      {
        question: "How can you debug unresponsive or slow UI interactions?",
        answer: "Unresponsive or slow UI can be debugged by checking for excessive re-renders, using the React Profiler to track render times, and analyzing the browser's event handling. Also, optimizing CSS and JavaScript can significantly improve UI performance.",
        category: "Debugging",
      },
      {
        question: "What are some debugging tips for mobile applications?",
        answer: "Mobile application debugging can be done using device simulators or real devices and inspecting logs via remote debugging tools like Chrome DevTools or Xcode. Performance monitoring tools like Firebase Performance Monitoring can be used to track app performance.",
        category: "Debugging",
      },
    
    // **Unit Testing**
    {
      question:
        "What is the purpose of unit testing in frontend development and how is it implemented?",
      answer:
        "Unit testing focuses on testing individual components or functions in isolation to ensure they work as expected. In frontend development, unit testing is typically implemented using testing frameworks and libraries such as Jest and React Testing Library. Tests are written to check the behavior of components, functions, and modules, covering various scenarios and edge cases. By running unit tests regularly, developers can catch and fix issues early, ensuring code quality and functionality throughout the development process.",
        category: "Unit Testing",
    },
    {
      question: "How can you write effective unit tests for React components?",
      answer:
        "Effective unit tests for React components involve testing their behavior, rendering, and interactions. Use React Testing Library to render components and simulate user interactions, checking for expected output and changes in state or props. Write tests to cover various scenarios, including edge cases and error states. Ensure that tests are readable, maintainable, and focused on component logic rather than implementation details. Use Jest's mocking and assertion capabilities to validate component behavior and interactions with other modules.",
        category: "Unit Testing",
    },
    {
      question: "What is mocking in unit testing and how is it used with Jest?",
      answer:
        "Mocking in unit testing involves creating simulated versions of modules or functions to control their behavior and isolate the code being tested. In Jest, mocking is achieved using functions like `jest.mock()` to replace real implementations with mock functions or objects. This allows you to test components or functions in isolation, control the behavior of dependencies, and validate interactions without relying on real implementations. Mocking is useful for testing edge cases, managing side effects, and improving test performance.",
        category: "Unit Testing",
    },
    {
      question: "How do you test asynchronous code with Jest?",
      answer:
        "Testing asynchronous code with Jest involves handling promises, async/await, or callback functions. Use `async` functions and `await` expressions to handle promises, ensuring that tests wait for asynchronous operations to complete. For callbacks, use Jest's `done` callback to signal when asynchronous code has finished executing. Jest also provides utilities like `fakeTimers` to control and test timer-based operations. Properly handling asynchronous code ensures that tests accurately reflect the behavior of asynchronous operations and their outcomes.",
        category: "Unit Testing",
    },
    {
      question: "What are snapshot tests in Jest, and how are they useful?",
      answer:
        "Snapshot tests in Jest capture the rendered output of components or functions and save it to a snapshot file. When tests are run, Jest compares the current output to the saved snapshot and reports any differences. Snapshot tests are useful for detecting unexpected changes in component output or function results. They help ensure that UI components and functions produce consistent output over time. However, they should be used in conjunction with other types of tests to cover different aspects of functionality and behavior.",
        category: "Unit Testing",
    },

    // **Integration Testing**
    {
      question:
        "What is integration testing and how does it differ from unit testing?",
      answer:
        "Integration testing focuses on testing the interactions between multiple components or modules to ensure they work together as expected. Unlike unit testing, which tests individual components or functions in isolation, integration testing verifies the integration points and data flow between different parts of the application. Integration tests can involve testing API interactions, data handling, and component interactions. They help identify issues that arise from the integration of different parts of the application, ensuring overall functionality and compatibility.",
        category: "Integration Testing",
    },
    {
      question:
        "How can you test interactions between React components using React Testing Library?",
      answer:
        "To test interactions between React components using React Testing Library, render the components together in a test environment and simulate user interactions. Use methods like `fireEvent` or `userEvent` to trigger events such as clicks, form submissions, or input changes. Check for expected changes in the DOM or component state to validate interactions and behavior. React Testing Library encourages testing components as users would interact with them, ensuring that integration and interaction logic are thoroughly tested.",
        category: "Integration Testing",
    },
    {
      question:
        "What are some best practices for writing effective integration tests?",
      answer:
        "Best practices for writing effective integration tests include: 1) Focus on testing critical interactions and integrations between components or modules. 2) Use realistic data and scenarios to ensure tests reflect real-world usage. 3) Keep tests maintainable and readable by organizing them logically and using descriptive test names. 4) Avoid testing implementation details and focus on behavior and outcomes. 5) Ensure tests run quickly and reliably by isolating dependencies and minimizing external factors.",
        category: "Integration Testing",
    },
    {
      question:
        "How can you use Jest to test asynchronous interactions in integration tests?",
      answer:
        "To test asynchronous interactions in Jest integration tests, use `async` and `await` to handle promises and ensure that tests wait for asynchronous operations to complete. For component interactions that involve asynchronous data fetching or state updates, render the components and simulate interactions, then use assertions to verify the results once the asynchronous operations have finished. Jest's built-in support for promises and async/await simplifies the process of testing asynchronous interactions and handling side effects.",
        category: "Integration Testing",
    },
    {
      question: "How can you test API interactions in integration tests?",
      answer:
        "To test API interactions in integration tests, mock API calls using tools like Jest's `jest.mock()` or libraries such as `msw` (Mock Service Worker) to simulate server responses. Render components that depend on API data, trigger API calls, and verify that the components handle responses correctly. Check for expected updates in the UI, error handling, and data rendering. Mocking API interactions ensures tests are not dependent on external servers and allows for consistent and controlled testing environments.",
        category: "Integration Testing",
    },

    // **End-to-End Testing**
    {
      question: "What is end-to-end (E2E) testing and why is it important?",
      answer:
        "End-to-end (E2E) testing involves testing the entire application from the user's perspective to ensure that all components and workflows function correctly together. It simulates real user scenarios, including interactions with the UI, data flow, and external services. E2E testing is important because it verifies that the application behaves as expected in a real-world environment, identifies integration issues, and ensures the overall user experience is consistent and reliable.",
        category: "End-to-End Testing",
    },
    {
      question: "How can you implement end-to-end testing using Cypress?",
      answer:
        "Cypress is a popular tool for end-to-end testing that provides a complete testing framework with an interactive test runner. To implement E2E testing with Cypress, install the Cypress package and create test files in the `cypress/integration` directory. Write test scripts to visit pages, interact with elements, and assert expected outcomes. Cypress provides APIs for simulating user actions, handling network requests, and inspecting DOM elements. The interactive test runner allows you to debug tests in real time and view test results.",
        category: "End-to-End Testing",
    },
    {
      question: "What are the key features of Cypress for end-to-end testing?",
      answer:
        "Key features of Cypress include: 1) Real-time browser preview with interactive debugging. 2) Automatic waiting for DOM elements and network requests. 3) Easy setup and integration with existing test frameworks. 4) Powerful APIs for interacting with elements, making assertions, and handling network requests. 5) Built-in support for stubbing and mocking network requests. 6) Detailed and readable test reports with screenshots and videos of test runs.",
        category: "End-to-End Testing",
    },
    {
      question: "How do you handle dynamic content in end-to-end tests?",
      answer:
        "Handling dynamic content in end-to-end tests involves dealing with elements that change based on user interactions or server responses. Use Cypress commands like `cy.wait()` to handle asynchronous operations and ensure that tests wait for dynamic content to load. Leverage conditional logic and assertions to verify that dynamic content appears as expected. Use data attributes or specific selectors to target dynamic elements reliably, ensuring tests can accurately validate changing content.",
        category: "End-to-End Testing",
    },
    {
      question:
        "What are the benefits of using end-to-end testing frameworks like Cypress or Selenium?",
      answer:
        "End-to-end testing frameworks like Cypress and Selenium offer several benefits: 1) Comprehensive testing of the entire application from the user's perspective. 2) Detection of integration and workflow issues that may not be caught by unit or integration tests. 3) Automation of repetitive testing tasks, improving efficiency and consistency. 4) Support for real-time debugging and interactive test running. 5) Detailed test reporting and visualization of test results, aiding in identifying and fixing issues.",
        category: "End-to-End Testing",
    },

    // **Jest & React Testing Library**
    {
      question:
        "What are some core features of Jest for testing JavaScript applications?",
      answer:
        "Jest is a popular JavaScript testing framework known for its simplicity and powerful features. Core features include: 1) Built-in test runners and assertion libraries. 2) Snapshot testing for capturing and comparing component output. 3) Mocking and spying capabilities for isolating code and testing interactions. 4) Code coverage analysis to measure test coverage. 5) Parallel test execution for faster test runs. 6) Easy configuration and integration with other tools and frameworks.",
        category: "Jest & React Testing Library",
    },
    {
      question: "How does Jest handle asynchronous code testing?",
      answer:
        "Jest handles asynchronous code testing using `async` and `await` syntax, along with promises and callback functions. You can use `async` functions and `await` expressions to wait for asynchronous operations to complete before making assertions. Jest also supports `done` callbacks for testing code that uses callbacks. Additionally, Jest provides utilities for handling promises and time-based operations, ensuring that asynchronous tests are properly managed and accurate.",
        category: "Jest & React Testing Library",
    },
    {
      question: "What are Jest mocks and how do you use them effectively?",
      answer:
        "Jest mocks are functions or objects that simulate the behavior of real modules or dependencies, allowing you to test components in isolation. Use `jest.mock()` to replace real implementations with mock functions or objects. Mocks can be used to control the behavior of dependencies, track calls and interactions, and validate how components or functions handle various scenarios. Effective use of mocks involves creating realistic simulations of dependencies, managing mock behavior, and ensuring that tests accurately reflect expected interactions.",
        category: "Jest & React Testing Library",
    },
    {
      question:
        "How can you use Jest's snapshot testing to ensure UI consistency?",
      answer:
        "Jest's snapshot testing captures the rendered output of UI components and saves it to a snapshot file. When tests are run, Jest compares the current output to the saved snapshot and reports any differences. This helps ensure that UI components produce consistent output over time and detect unintended changes. To use snapshot testing, render components using a testing library, generate snapshots with `toMatchSnapshot()`, and review snapshot updates as needed to maintain UI consistency.",
        category: "Jest & React Testing Library",
    },
    {
      question:
        "What is Jest's coverage report and how do you use it to improve code quality?",
      answer:
        "Jest's coverage report provides insights into the percentage of code covered by tests, including statement, branch, and function coverage. Use coverage reports to identify untested areas of code, ensuring that critical paths and edge cases are covered by tests. To generate a coverage report, run tests with the `--coverage` flag. Analyze the report to identify gaps in test coverage and improve code quality by writing additional tests for uncovered code paths.",
        category: "Jest & React Testing Library",
    },
    {
      question:
        "How does React Testing Library encourage testing components from a user's perspective?",
      answer:
        "React Testing Library encourages testing components from a user's perspective by focusing on how components behave and interact with the DOM, rather than testing implementation details. It provides utilities like `render()`, `fireEvent()`, and `screen` to simulate user interactions and query elements based on their role or text content. This approach helps ensure that tests reflect real-world usage, improving the reliability and maintainability of tests while encouraging best practices in component design and behavior.",
        category: "Jest & React Testing Library",
    },
    {
      question:
        "What are some common queries provided by React Testing Library and how are they used?",
      answer:
        "Common queries provided by React Testing Library include `getByText`, `getByRole`, `getByLabelText`, and `getByTestId`. These queries are used to locate elements in the rendered component based on their visible text, role, label, or data attributes. For example, `getByText('Submit')` locates an element with the text 'Submit', while `getByRole('button')` finds a button element. Using these queries ensures that tests are focused on how users interact with the UI and improves test readability and reliability.",
        category: "Jest & React Testing Library",
    },
    {
      question:
        "How can you test user interactions such as clicks and form submissions using React Testing Library?",
      answer:
        "To test user interactions like clicks and form submissions using React Testing Library, use the `fireEvent` or `userEvent` utilities. For example, use `fireEvent.click(buttonElement)` to simulate a click event on a button or `userEvent.type(inputElement, 'text')` to simulate typing in an input field. After simulating interactions, use assertions to verify that the expected changes occur in the component's state or the rendered output. These utilities help ensure that components handle user interactions correctly.",
        category: "Jest & React Testing Library",
    },
    {
      question:
        "How do you handle asynchronous behavior in tests with React Testing Library?",
      answer:
        "Handle asynchronous behavior in tests with React Testing Library by using `await` with `findBy` queries. For example, `await screen.findByText('Loading...')` waits for an element to appear in the DOM. React Testing Library provides `findBy` queries for locating elements that appear asynchronously, ensuring that tests wait for elements to be rendered before making assertions. Additionally, use `waitFor` to wait for specific conditions or updates in the component, ensuring that tests accurately reflect asynchronous behavior.",
        category: "Jest & React Testing Library",
    },
    {
      question:
        "What are some best practices for writing tests with React Testing Library?",
      answer:
        "Best practices for writing tests with React Testing Library include: 1) Focus on testing user interactions and component behavior rather than implementation details. 2) Use queries that reflect how users interact with the UI, such as `getByText` and `getByRole`. 3) Keep tests simple and readable by writing clear and descriptive test cases. 4) Avoid using `wait` or `setTimeout` unless necessary, and prefer `findBy` queries for handling asynchronous behavior. 5) Ensure tests are maintainable and reflect real-world usage scenarios.",
        category: "Jest & React Testing Library",
    },
  ];

  const sections = [
    "HTML",
    "CSS",
    "Git and GitHub",
    "Frontend Security",
    "Performance Optimization",
    "Debugging",
    "Unit Testing",
    "Integration Testing",
    "End-to-End Testing",
    "Jest & React Testing Library"
  ];
  
  // Filter questions based on the selected section
  const filteredQnaList = miscellaneousQnaList.filter(
    (qna) => qna.category === sections[currentSectionIndex]
  );
  
  const handleSectionChange = (index) => {
    setCurrentSectionIndex(index); // Update selected section
    onPageChange(1); // Reset pagination to page 1
  };
  
  const {
    currentPage,
    itemsPerPage,
    totalPages,
    currentItems,
    onPageChange,
    onItemsPerPageChange,
  } = usePagination(filteredQnaList, 10);
  
  const sectionDetails = sections.map((section) => ({
    title: section,
    content: filteredQnaList.filter((qna) => qna.category === section),
  }));
  
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  
  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
        MISCELLANEOUS CONCEPTS
      </h1>
      <Accordion
        sections={sectionDetails.map((section) => ({
          title: section.title,
          content: (
            <>
              {currentSectionIndex === sections.indexOf(section.title) && (
                <>
                  {currentItems.map((qa, index) => (
                    <div
                      key={index}
                      className="mb-5 pb-3 border-b border-gray-300"
                    >
                      <h2 className="text-lg text-black">{startIndex + index}.&nbsp;{qa.question}</h2>
                      <p className="text-gray-600">{qa.answer}</p>
                    </div>
                  ))}
                  <Pagination
                    totalItems={filteredQnaList.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    onItemsPerPageChange={onItemsPerPageChange}
                  />
                </>
              )}
            </>
          ),
        }))}
        onSelectSection={handleSectionChange}
      />
    </div>
  );
  };
  
  export default MiscellaneousBlog;
  