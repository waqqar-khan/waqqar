import "../../App.css";

import Pagination from "../../feature/Pagination";
import usePagination from "../../hooks/usePagination";

const JavaScriptBlog = () => {
  const jsQnaList = [
    {
      question:
        "What is the difference between '==' and '===' operators in JavaScript?",
      answer:
        "'==' checks for equality with type coercion, meaning it converts values to the same type before comparing them. For example, '1' == 1 is true because the string '1' is converted to the number 1. On the other hand, '===' checks for equality without type coercion, so '1' === 1 is false as the types are different (string vs. number).",
    },
    {
      question: "What are closures in JavaScript and why are they important?",
      answer:
        "Closures are functions that maintain access to variables from their outer function even after the outer function has returned. This allows the inner function to retain the environment where it was created. Closures are important for encapsulating data, creating private variables, and enabling functional programming patterns like function factories and maintaining state.",
    },
    {
      question: "How does the JavaScript event loop work?",
      answer:
        "The event loop manages the execution of code, handles asynchronous operations, and processes events in JavaScript. It continuously checks the call stack and the task queue. If the call stack is empty, it takes the first task from the queue and pushes it onto the stack to be executed. This allows JavaScript to handle asynchronous tasks like I/O operations without blocking the main execution thread.",
    },
    {
      question: "What is the difference between 'let', 'const', and 'var'?",
      answer:
        "'var' is function-scoped, meaning it's available throughout the function where it's declared, and can be redeclared and updated. 'let' and 'const' are block-scoped, available only within the block where they are defined. 'const' is used for variables that cannot be reassigned, while 'let' allows reassignment. Unlike 'var', 'let' and 'const' do not suffer from hoisting issues.",
    },
    {
      question: "What are promises in JavaScript?",
      answer:
        "Promises are objects that represent the eventual result of an asynchronous operation. They allow you to handle asynchronous code more gracefully compared to traditional callbacks. A promise can be in one of three states: pending, resolved (fulfilled), or rejected. You use methods like 'then' for handling resolved values and 'catch' for handling errors.",
    },
    {
      question: "What is the purpose of async/await in JavaScript?",
      answer:
        "Async/await is a syntactic sugar built on top of promises, designed to simplify writing asynchronous code. An 'async' function always returns a promise, and 'await' pauses the execution of the async function until the promise is resolved or rejected. This makes asynchronous code look and behave more like synchronous code, improving readability and maintainability.",
    },
    {
      question: "How does prototypal inheritance work in JavaScript?",
      answer:
        "Prototypal inheritance allows objects to inherit properties and methods from other objects. Each object has a prototype object that it inherits from. When accessing a property or method, JavaScript first looks at the object itself, and if it’s not found, it looks at the prototype chain. This allows for shared behavior and properties across multiple objects.",
    },
    {
      question: "What is the 'this' keyword in JavaScript?",
      answer:
        "'this' refers to the context in which a function is executed. Its value is determined by how the function is called. For example, 'this' in a method refers to the object that owns the method, 'this' in a constructor function refers to the instance being created, and 'this' in a regular function refers to the global object (or undefined in strict mode).",
    },
    {
      question: "How can you handle errors in JavaScript?",
      answer:
        "Errors in JavaScript can be handled using try-catch blocks. Code that may throw an error is placed inside the 'try' block, and error-handling code is placed inside the 'catch' block. This allows you to gracefully handle exceptions and prevent the script from crashing. Optionally, you can use 'finally' to execute code after the try-catch block regardless of whether an error was thrown.",
    },
    {
      question:
        "What is the difference between synchronous and asynchronous code in JavaScript?",
      answer:
        "Synchronous code is executed line-by-line and blocks further execution until the current task is complete. Asynchronous code, on the other hand, allows other code to run while waiting for longer operations (like I/O or network requests) to finish. Asynchronous code can be managed using callbacks, promises, or async/await to avoid blocking the main thread and improve performance.",
    },
    {
      question: "What are higher-order functions in JavaScript?",
      answer:
        "Higher-order functions are functions that either take other functions as arguments or return functions as their results. This allows you to abstract over actions and create more flexible code. For example, functions like 'map', 'filter', and 'reduce' are higher-order functions because they take a function as an argument to apply to each element in an array. Higher-order functions are useful for managing complexity by promoting code reuse and enabling functional programming patterns.",
    },
    {
      question: "What is the module pattern in JavaScript?",
      answer:
        "The module pattern is a design pattern that encapsulates code into reusable units, using an immediately invoked function expression (IIFE) to create a private scope. This pattern helps in hiding implementation details and exposing only the public API. For example, you might use an IIFE to create a module that contains private variables and functions, and return an object with public methods. This helps in organizing code and managing dependencies while avoiding polluting the global namespace.",
    },
    {
      question:
        "What are arrow functions and how do they differ from regular functions?",
      answer:
        "Arrow functions provide a concise syntax for writing functions and do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope. This makes arrow functions particularly useful for callbacks and methods where you want to maintain the 'this' value from the enclosing context. For instance, inside an arrow function, 'this' refers to the object that contains the function. Unlike regular functions, arrow functions also cannot be used as constructors and do not have access to the 'arguments' object.",
    },
    {
      question: "What is the spread operator and how is it used?",
      answer:
        "The spread operator (...) allows an iterable (like an array or string) to be expanded into individual elements in places where multiple arguments or elements are expected. It is useful for various tasks such as copying arrays, merging arrays, and spreading elements into function arguments. For example, '[...arr]' creates a shallow copy of the array 'arr', while 'Math.max(...arr)' finds the maximum value in the array by spreading its elements as individual arguments.",
    },
    {
      question: "What is destructuring in JavaScript?",
      answer:
        "Destructuring is a syntax feature that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise way. For arrays, you can use syntax like '[a, b] = [1, 2]' to assign the values 1 and 2 to 'a' and 'b', respectively. For objects, you can use syntax like '{x, y} = {x: 1, y: 2}' to assign the properties 'x' and 'y' to variables with the same names. Destructuring simplifies code by reducing the need for multiple lines of variable assignment.",
    },
    {
      question: "What is event delegation in JavaScript?",
      answer:
        "Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements. This takes advantage of event bubbling, where events propagate up through the DOM tree from the target element to the parent elements. By attaching the listener to a parent element, you can handle events for dynamically added child elements without needing to attach individual listeners to each child. This approach improves performance and simplifies event management, especially in cases where many child elements are involved.",
    },
    {
      question: "How do you prevent default behavior for events in JavaScript?",
      answer:
        "To prevent the default behavior of an event, you can use the 'event.preventDefault()' method within an event handler. This method stops the default action associated with the event from being executed. For example, in a form submission event, calling 'preventDefault()' prevents the form from being submitted and allows you to handle the submission process manually. This is particularly useful for handling custom logic in response to events and preventing unwanted browser default actions.",
    },
    {
      question: "What is JSON and how do you work with it in JavaScript?",
      answer:
        "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. In JavaScript, you can convert objects to JSON strings using 'JSON.stringify()' and parse JSON strings back into objects using 'JSON.parse()'. This is commonly used for exchanging data between a client and a server. For example, 'const jsonString = JSON.stringify(obj)' converts an object 'obj' to a JSON string, and 'const obj = JSON.parse(jsonString)' converts it back to an object.",
    },
    {
      question: "What is a callback function in JavaScript?",
      answer:
        "A callback function is a function passed as an argument to another function, which is then executed after the completion of that function. Callbacks are commonly used to handle asynchronous operations, such as making API requests or handling events. For example, in an asynchronous API call, you might pass a callback function to handle the response once the data is received. This approach allows you to define custom behavior that should occur once the asynchronous operation is complete.",
    },
    {
      question:
        "What is the difference between 'null' and 'undefined' in JavaScript?",
      answer:
        "'undefined' means that a variable has been declared but has not yet been assigned a value. It is the default value for uninitialized variables. 'null', on the other hand, is an explicit assignment value used to represent 'no value' or a non-existent reference. For instance, you might set a variable to 'null' to indicate that it should eventually hold an object but currently does not. While both 'null' and 'undefined' represent the absence of a value, 'null' is explicitly assigned, while 'undefined' is automatically assigned by the JavaScript engine.",
    },
    // above
    {
      question: "How do you create a deep copy of an object in JavaScript?",
      answer:
        "A deep copy of an object can be created using structuredClone(), or by converting the object to a JSON string and parsing it back into an object using 'JSON.stringify()' and 'JSON.parse()'. However, this method does not handle functions, special objects like Date, or circular references.",
    },
    {
      question:
        "What is the purpose of the 'use strict' directive in JavaScript?",
      answer:
        "'use strict' is a directive that enforces stricter parsing and error handling in JavaScript code. It helps catch common coding errors and prevents the use of some unsafe features.",
    },
    {
      question: "How do you define a class in JavaScript?",
      answer:
        "A class in JavaScript can be defined using the 'class' keyword, which introduces a new syntax for creating constructor functions and handling inheritance through prototypes.",
    },
    {
      question:
        "What is the difference between 'call', 'apply', and 'bind' methods?",
      answer:
        "'call' and 'apply' are used to invoke a function with a specified 'this' context and arguments, with 'call' accepting a list of arguments and 'apply' accepting an array of arguments. 'bind' returns a new function with a specified 'this' context and preset arguments.",
    },
    {
      question: "What are template literals in JavaScript?",
      answer:
        "Template literals are string literals enclosed by backticks (``) that allow embedded expressions and multi-line strings. They support interpolation using '${expression}' syntax.",
    },
    {
      question: "How do you handle asynchronous operations using promises?",
      answer:
        "Asynchronous operations using promises are handled by creating a new Promise object and using its 'then' and 'catch' methods to define callbacks for success and failure cases, respectively.",
    },
    {
      question: "What is a generator function and how is it used?",
      answer:
        "A generator function is defined using the 'function*' syntax and can yield multiple values over time, pausing and resuming its execution with 'yield' and 'next()' methods.",
    },
    {
      question:
        "What is the difference between 'slice' and 'splice' methods in JavaScript?",
      answer:
        "'slice' creates a shallow copy of a portion of an array without modifying the original array, while 'splice' changes the contents of an array by adding, removing, or replacing elements in place.",
    },
    {
      question: "How do you create a module in JavaScript?",
      answer:
        "A module in JavaScript can be created using the ES6 module syntax, which involves using 'export' to expose variables, functions, or classes, and 'import' to include them in other files.",
    },
    {
      question: "What is the event propagation in JavaScript?",
      answer:
        "Event propagation is the order in which events are received on an element and its ancestors. It includes three phases: capturing phase, target phase, and bubbling phase.",
    },
    {
      question: "What are JavaScript data types?",
      answer:
        "JavaScript has seven primitive data types: number, string, boolean, null, undefined, symbol, and bigint, and one complex data type: object.",
    },
    {
      question: "How do you check for an array in JavaScript?",
      answer:
        "You can check for an array using 'Array.isArray()' method, which returns true if the passed value is an array.",
    },
    {
      question:
        "What is the difference between 'map' and 'forEach' methods in JavaScript?",
      answer:
        "'map' creates a new array with the results of calling a provided function on every element, while 'forEach' executes a provided function once for each array element but does not return a new array.",
    },
    {
      question: "How do you handle exceptions in JavaScript?",
      answer:
        "Exceptions in JavaScript can be handled using try-catch-finally blocks, where 'try' contains code that may throw an error, 'catch' handles the error, and 'finally' executes code regardless of the error.",
    },
    {
      question:
        "What is the difference between 'Object.freeze()' and 'Object.seal()'?",
      answer:
        "'Object.freeze()' makes an object immutable, preventing any changes to its properties or values, while 'Object.seal()' prevents the addition or removal of properties but allows modification of existing properties.",
    },
    {
      question: "What is a promise chain in JavaScript?",
      answer:
        "A promise chain is a series of promises where each promise returns another promise, allowing for sequential execution of asynchronous tasks by chaining 'then' methods.",
    },
    {
      question: "How do you create an object in JavaScript?",
      answer:
        "An object in JavaScript can be created using object literal syntax ({}), constructor functions, or the 'Object.create()' method.",
    },
    {
      question: "What is the purpose of the 'typeof' operator?",
      answer:
        "The 'typeof' operator is used to determine the data type of a value, returning a string representing the type, such as 'number', 'string', 'boolean', 'undefined', 'object', 'function', or 'symbol'.",
    },
    {
      question: "What is event bubbling in JavaScript?",
      answer:
        "Event bubbling is a type of event propagation where the event starts from the target element and propagates up to the root of the DOM tree, triggering event handlers on parent elements.",
    },
    {
      question: "What are JavaScript Promises?",
      answer:
        "Promises are objects representing the eventual completion or failure of an asynchronous operation, providing methods to handle asynchronous results such as 'then', 'catch', and 'finally'.",
    },
    {
      question: "What is the purpose of the 'debounce' function?",
      answer:
        "The 'debounce' function delays the execution of a function until a specified time has passed since the last time it was invoked, useful for limiting the rate at which a function is executed.",
    },
    {
      question:
        "What is the difference between '==', '===', and 'Object.is()'?",
      answer:
        "'==' checks for equality with type coercion, '===' checks for strict equality without type coercion, and 'Object.is()' checks for strict equality with special handling for NaN and negative zero.",
    },
    {
      question: "How do you handle deep cloning of objects in JavaScript?",
      answer:
        "Deep cloning of objects can be handled using libraries like Lodash's 'cloneDeep()' method, or by writing custom recursive functions to copy nested objects and arrays.",
    },
    {
      question: "What is the 'Symbol' data type in JavaScript?",
      answer:
        "The 'Symbol' data type is a primitive type used to create unique and immutable identifiers, often used for object properties to avoid naming conflicts.",
    },
    {
      question: "What are 'getter' and 'setter' methods in JavaScript?",
      answer:
        "'Getter' and 'setter' methods are functions that allow you to define custom behavior for accessing and modifying properties of an object, defined using 'get' and 'set' keywords.",
    },
    {
      question: "How do you handle asynchronous iteration in JavaScript?",
      answer:
        "Asynchronous iteration can be handled using 'for await...of' loops, which work with asynchronous iterators to handle promises in a sequential manner.",
    },
    {
      question: "What is the purpose of 'Function.prototype.bind()'?",
      answer:
        "'Function.prototype.bind()' creates a new function with a specified 'this' context and optional pre-set arguments, useful for creating bound functions for event handlers and callbacks.",
    },
    {
      question: "How do you work with the 'arguments' object in JavaScript?",
      answer:
        "The 'arguments' object is an array-like object accessible within functions, containing all the arguments passed to the function. It can be used to handle variable numbers of arguments.",
    },
    {
      question: "What are the different ways to create objects in JavaScript?",
      answer:
        "Objects can be created using object literals, constructor functions, ES6 classes, or 'Object.create()' method.",
    },
    {
      question: "How do you handle promises in JavaScript?",
      answer:
        "Promises in JavaScript are handled using 'then', 'catch', and 'finally' methods to define success, failure, and completion callbacks, or using async/await syntax for more readable code.",
    },
    {
      question: "What is 'strict mode' in JavaScript?",
      answer:
        "'Strict mode' is a restricted variant of JavaScript that eliminates some silent errors, improves performance, and provides better error handling. It is enabled by adding 'use strict' at the beginning of a script or function.",
    },
    {
      question: "How does the 'instanceof' operator work in JavaScript?",
      answer:
        "The 'instanceof' operator checks if an object is an instance of a constructor function or class, by comparing the object's prototype chain with the prototype property of the constructor.",
    },
    {
      question: "What is a proxy in JavaScript?",
      answer:
        "A proxy is an object that allows you to customize the behavior of another object, such as property access, assignment, enumeration, and function invocation, by defining handler functions.",
    },
    {
      question: "What is the purpose of the 'await' keyword in JavaScript?",
      answer:
        "The 'await' keyword is used in async functions to pause execution until a promise is resolved or rejected, simplifying asynchronous code and avoiding nested 'then' chains.",
    },
    {
      question: "How do you work with Web Workers in JavaScript?",
      answer:
        "Web Workers allow you to run scripts in background threads, separate from the main thread, enabling concurrent execution and preventing UI blocking for intensive computations.",
    },
    {
      question: "What is the purpose of the 'Object.assign()' method?",
      answer:
        "'Object.assign()' is used to copy the values of all enumerable own properties from one or more source objects to a target object, useful for merging objects and cloning.",
    },
    {
      question: "What is the 'spread' operator in JavaScript?",
      answer:
        "The spread operator (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments or elements are expected, useful for array manipulation and function arguments.",
    },
    {
      question: "How do you create and dispatch custom events in JavaScript?",
      answer:
        "Custom events can be created using the 'CustomEvent' constructor and dispatched using the 'dispatchEvent()' method, allowing you to define and handle custom event types in your application.",
    },
    {
      question: "What is the purpose of the 'Array.prototype.reduce()' method?",
      answer:
        "'Array.prototype.reduce()' executes a reducer function on each element of the array, resulting in a single output value. It is useful for aggregating data, such as summing an array of numbers.",
    },
    {
      question: "How do you implement inheritance in JavaScript?",
      answer:
        "Inheritance in JavaScript can be implemented using prototypes, constructor functions, or ES6 classes with the 'extends' keyword, allowing objects to inherit properties and methods from other objects.",
    },
    {
      question: "What are 'static' methods in JavaScript classes?",
      answer:
        "Static methods are defined on the class itself, rather than on instances of the class. They are called using the class name and are often used for utility functions related to the class.",
    },
    {
      question:
        "What is the difference between 'Array.prototype.filter()' and 'Array.prototype.map()'?",
      answer:
        "'Array.prototype.filter()' creates a new array with elements that pass a test implemented by a provided function, while 'Array.prototype.map()' creates a new array with the results of applying a provided function to every element.",
    },
    {
      question: "What is the purpose of the 'Object.keys()' method?",
      answer:
        "'Object.keys()' returns an array of the object's own enumerable property names, useful for iterating over or extracting property names from an object.",
    },
    {
      question: "How do you handle deep cloning of objects in JavaScript?",
      answer:
        "Deep cloning of objects can be achieved using libraries like Lodash's 'cloneDeep()' method, or by writing custom recursive functions to copy nested objects and arrays.",
    },
    {
      question: "What is the 'Symbol' data type in JavaScript?",
      answer:
        "The 'Symbol' data type is a primitive type used to create unique and immutable identifiers, often used for object properties to avoid naming conflicts.",
    },
    {
      question: "How do you handle promises in JavaScript?",
      answer:
        "Promises in JavaScript are handled using 'then', 'catch', and 'finally' methods to define success, failure, and completion callbacks, or using async/await syntax for more readable code.",
    },
    {
      question: "What is 'strict mode' in JavaScript?",
      answer:
        "'Strict mode' is a restricted variant of JavaScript that eliminates some silent errors, improves performance, and provides better error handling. It is enabled by adding 'use strict' at the beginning of a script or function.",
    },
    {
      question: "How does the 'instanceof' operator work in JavaScript?",
      answer:
        "The 'instanceof' operator checks if an object is an instance of a constructor function or class, by comparing the object's prototype chain with the prototype property of the constructor.",
    },
    {
      question: "What are 'computed properties' in JavaScript?",
      answer:
        "Computed properties are object properties that are defined using an expression within square brackets, allowing dynamic property names to be calculated at runtime.",
    },
    {
      question: "What is the purpose of the 'Object.entries()' method?",
      answer:
        "'Object.entries()' returns an array of key-value pairs from an object, allowing you to iterate over or manipulate the object's properties and values.",
    },
    {
      question: "How do you handle deep equality checks in JavaScript?",
      answer:
        "Deep equality checks can be handled using libraries like Lodash's 'isEqual()' method, or by writing custom recursive functions to compare nested objects and arrays.",
    },
    {
      question: "What are 'mixins' in JavaScript?",
      answer:
        "Mixins are objects or functions that allow you to add reusable behavior or properties to classes or other objects, often used to achieve multiple inheritance or code reuse.",
    },
    {
      question: "What is the purpose of the 'Array.prototype.flat()' method?",
      answer:
        "'Array.prototype.flat()' creates a new array with all sub-array elements concatenated into it recursively up to the specified depth, useful for flattening nested arrays.",
    },
    {
      question: "How do you handle optional chaining in JavaScript?",
      answer:
        "Optional chaining allows you to safely access deeply nested properties by using the '?.' operator, which short-circuits and returns 'undefined' if any part of the chain is 'null' or 'undefined'.",
    },
    {
      question: "What is the purpose of the 'Object.fromEntries()' method?",
      answer:
        "'Object.fromEntries()' creates a new object from an iterable of key-value pairs, effectively reversing the operation performed by 'Object.entries()'.",
    },
    {
      question: "How do you handle module imports and exports in JavaScript?",
      answer:
        "Module imports and exports are handled using 'import' and 'export' statements in ES6, allowing you to organize and share code between different files and modules.",
    },
    {
      question: "What is the purpose of the 'Array.prototype.find()' method?",
      answer:
        "'Array.prototype.find()' returns the first element in the array that satisfies a provided testing function, useful for searching for specific elements in an array.",
    },
    {
      question: "What are 'async' and 'await' in JavaScript?",
      answer:
        "'async' is a keyword used to define asynchronous functions, while 'await' is used within 'async' functions to pause execution until a promise is resolved or rejected, simplifying asynchronous code.",
    },
    {
      question: "What is the purpose of the 'Proxy' object in JavaScript?",
      answer:
        "The 'Proxy' object allows you to create a proxy for another object, defining custom behavior for fundamental operations like property access, assignment, and function invocation using handler functions.",
    },
    {
      question: "How do you handle destructuring in JavaScript?",
      answer:
        "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables, simplifying the process of extracting data from complex structures.",
    },
    {
      question:
        "What is the difference between 'Array.prototype.some()' and 'Array.prototype.every()'?",
      answer:
        "'Array.prototype.some()' tests whether at least one element in the array passes a provided function, while 'Array.prototype.every()' tests whether all elements pass the function.",
    },
    {
      question:
        "What is the purpose of the 'Array.prototype.includes()' method?",
      answer:
        "'Array.prototype.includes()' determines whether an array includes a certain value among its entries, returning 'true' or 'false', useful for checking for the presence of elements.",
    },
    {
      question: "What is a 'WeakMap' in JavaScript?",
      answer:
        "A 'WeakMap' is a collection of key-value pairs where the keys are objects and the values can be arbitrary values. It does not prevent garbage collection of the keys, allowing for efficient memory management.",
    },
    {
      question: "What is the purpose of the 'Array.prototype.sort()' method?",
      answer:
        "'Array.prototype.sort()' sorts the elements of an array in place and returns the sorted array. It can accept a compare function to define the sort order.",
    },
    {
      question: "How do you handle date and time in JavaScript?",
      answer:
        "Date and time in JavaScript are handled using the 'Date' object, which provides methods for creating, manipulating, and formatting dates and times.",
    },
    {
      question: "What is a 'Promise.all()' in JavaScript?",
      answer:
        "'Promise.all()' is a method that takes an array of promises and returns a single promise that resolves when all of the promises resolve, or rejects if any promise rejects, useful for running multiple asynchronous operations in parallel.",
    },
    {
      question: "What is the purpose of the 'Number.isNaN()' method?",
      answer:
        "'Number.isNaN()' is used to determine whether a value is 'NaN' (Not-a-Number) without the type coercion behavior of the global 'isNaN()' function, providing a more reliable check.",
    },
    {
      question:
        "What is the difference between 'var', 'let', and 'const' in JavaScript?",
      answer:
        "'var' declares variables with function scope and allows re-declaration, 'let' declares variables with block scope and does not allow re-declaration, and 'const' declares constants with block scope that cannot be reassigned.",
    },
    {
      question: "How do you handle regular expressions in JavaScript?",
      answer:
        "Regular expressions in JavaScript are handled using the 'RegExp' object and literal syntax, allowing for pattern matching and manipulation of strings.",
    },
    {
      question: "What is the purpose of the 'Array.prototype.concat()' method?",
      answer:
        "'Array.prototype.concat()' merges two or more arrays into a new array, useful for combining multiple arrays without modifying the original arrays.",
    },
    {
      question:
        "What is the difference between '==', '===', and 'Object.is()'?",
      answer:
        "'==' checks for equality with type coercion, '===' checks for strict equality without type coercion, and 'Object.is()' checks for strict equality with special handling for NaN and negative zero.",
    },
    {
      question: "How do you handle deep cloning of objects in JavaScript?",
      answer:
        "Deep cloning of objects can be handled using libraries like Lodash's 'cloneDeep()' method, or by writing custom recursive functions to copy nested objects and arrays.",
    },
    {
      question: "What is the purpose of the 'Object.getPrototypeOf()' method?",
      answer:
        "'Object.getPrototypeOf()' returns the prototype (i.e., the internal [[Prototype]] property) of a specified object, useful for inspecting the prototype chain.",
    },
    {
      question: "What are 'getter' and 'setter' methods in JavaScript?",
      answer:
        "'Getter' and 'setter' methods are functions that allow you to define custom behavior for accessing and modifying properties of an object, defined using 'get' and 'set' keywords.",
    },
    {
      question: "How do you handle asynchronous iteration in JavaScript?",
      answer:
        "Asynchronous iteration can be handled using 'for await...of' loops, which work with asynchronous iterators to handle promises in a sequential manner.",
    },
    {
      question: "What is the purpose of 'Function.prototype.bind()'?",
      answer:
        "'Function.prototype.bind()' creates a new function with a specified 'this' context and optional pre-set arguments, useful for creating bound functions for event handlers and callbacks.",
    },
    {
      question: "How do you work with the 'arguments' object in JavaScript?",
      answer:
        "The 'arguments' object is an array-like object accessible within functions, containing all the arguments passed to the function. It can be used to handle variable numbers of arguments.",
    },
    {
      question: "What is 'let' in JavaScript?",
      answer:
        "'let' is a keyword used to declare block-scoped variables, introduced in ES6, allowing variables to be confined to the block, statement, or expression in which they are used.",
    },
    {
      question: "What is 'const' in JavaScript?",
      answer:
        "'const' is a keyword used to declare variables whose values are constant and cannot be reassigned, ensuring that the variable reference cannot be changed.",
    },
    {
      question: "What is 'var' in JavaScript?",
      answer:
        "'var' is a keyword used to declare function-scoped or globally-scoped variables, allowing variable declarations to be hoisted to the top of their scope.",
    },
    {
      question: "What is 'hoisting' in JavaScript?",
      answer:
        "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase, allowing functions to be called before they are defined.",
    },
    {
      question: "What are 'arrow functions' in JavaScript?",
      answer:
        "Arrow functions are a shorthand syntax for writing functions in JavaScript, introduced in ES6, providing a concise way to write function expressions with lexical scoping of 'this' value.",
    },
    {
      question: "What is 'destructuring' in JavaScript?",
      answer:
        "Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables, simplifying the process of extracting data from complex structures.",
    },
    {
      question: "What are 'template literals' in JavaScript?",
      answer:
        "Template literals are string literals enclosed in backticks (`), allowing for embedded expressions using '${}' syntax, multi-line strings, and string interpolation.",
    },
    {
      question: "What is 'closure' in JavaScript?",
      answer:
        "A closure is a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has returned, allowing for data privacy and function factories.",
    },
    {
      question: "What is 'async' and 'await' in JavaScript?",
      answer:
        "'async' is a keyword used to define asynchronous functions, while 'await' is used within 'async' functions to pause execution until a promise is resolved or rejected, simplifying asynchronous code.",
    },
    {
      question: "What is 'Promise.all()' in JavaScript?",
      answer:
        "'Promise.all()' is a method that takes an array of promises and returns a single promise that resolves when all of the promises resolve, or rejects if any promise rejects, useful for running multiple asynchronous operations in parallel.",
    },
    {
      question: "What is 'Promise.race()' in JavaScript?",
      answer:
        "'Promise.race()' is a method that takes an array of promises and returns a single promise that resolves or rejects as soon as the first promise in the array resolves or rejects.",
    },
    {
      question: "What is 'Promise.any()' in JavaScript?",
      answer:
        "'Promise.any()' is a method that takes an array of promises and returns a single promise that resolves as soon as any one of the promises in the array resolves, or rejects if all the promises are rejected.",
    },
    {
      question: "What is 'Promise.allSettled()' in JavaScript?",
      answer:
        "'Promise.allSettled()' is a method that takes an array of promises and returns a single promise that resolves with an array of the results when all of the promises have settled, either resolved or rejected.",
    },
    {
      question: "What is 'event delegation' in JavaScript?",
      answer:
        "Event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements, improving performance and simplifying code.",
    },
    {
      question: "What is 'debouncing' in JavaScript?",
      answer:
        "Debouncing is a technique to limit the rate at which a function is executed, ensuring that it is only called after a specified delay has passed since the last invocation, useful for optimizing performance in scenarios like user input handling.",
    },
    {
      question: "What is 'throttling' in JavaScript?",
      answer:
        "Throttling is a technique to limit the rate at which a function is executed, ensuring that it is called at most once in a specified period, useful for optimizing performance in scenarios like scrolling or resizing events.",
    },
    {
      question: "What is 'memoization' in JavaScript?",
      answer:
        "Memoization is an optimization technique to speed up function execution by caching the results of expensive function calls and returning the cached result when the same inputs occur again.",
    },
  ];

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    currentItems,
    onPageChange,
    onItemsPerPageChange,
  } = usePagination(jsQnaList, 10);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
        JAVASCRIPT BlOG
      </h1>
      {currentItems.map((qa, index) => (
        <div key={index} className="mb-5 pb-3 border-b border-gray-300">
          <h2 className="text-lg text-black">
            {startIndex + index}.&nbsp;{qa.question}
          </h2>
          <p className="text-gray-600">{qa.answer}</p>
        </div>
      ))}
      <Pagination
        totalItems={jsQnaList.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        onItemsPerPageChange={onItemsPerPageChange}
      />
    </div>
  );
};

export default JavaScriptBlog;
