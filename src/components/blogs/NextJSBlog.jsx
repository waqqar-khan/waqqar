import "../../App.css";

import Pagination from "../../feature/Pagination";
import usePagination from "../../hooks/usePagination";

const NextJSBlog = () => {
  const nextJSQnaList = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that provides a set of tools and features for building server-side rendered (SSR) and statically generated web applications with ease. It simplifies the process of building and deploying React applications by offering features like automatic code splitting, server-side rendering, static site generation, and more.",
    },
    {
      question: "What is server-side rendering (SSR) in Next.js?",
      answer:
        "Server-side rendering (SSR) in Next.js refers to the process of rendering pages on the server for each request. This means the HTML is generated on the server, sent to the client, and then hydrated with React on the client side. SSR improves SEO and can provide faster initial page loads.",
    },
    {
      question: "What is static site generation (SSG) in Next.js?",
      answer:
        "Static site generation (SSG) in Next.js refers to generating HTML at build time rather than on each request. This allows pages to be pre-rendered into static HTML files, which are served to users quickly and efficiently, enhancing performance and scalability.",
    },
    {
      question: "How does Next.js handle routing?",
      answer:
        "Next.js uses a file-based routing system where the file structure in the 'pages' directory corresponds to the routes of the application. Each file in 'pages' automatically becomes a route, and dynamic routes can be created using file naming conventions with brackets (e.g., [id].js).",
    },
    {
      question: "What is the purpose of 'getStaticProps' in Next.js?",
      answer:
        "'getStaticProps' is an async function that runs at build time in Next.js. It allows you to fetch data and pass it as props to a page component, enabling static generation of pages with dynamic content based on the fetched data.",
    },
    {
      question: "What is the purpose of 'getServerSideProps' in Next.js?",
      answer:
        "'getServerSideProps' is an async function that runs on the server for each request. It allows you to fetch data and pass it as props to a page component, enabling server-side rendering with data fetched at request time.",
    },
    {
      question: "What is the purpose of 'getStaticPaths' in Next.js?",
      answer:
        "'getStaticPaths' is an async function used in conjunction with 'getStaticProps' to define dynamic routes for static generation. It returns a list of paths that should be statically generated, allowing Next.js to build pages for those paths at build time.",
    },
    {
      question:
        "What is the difference between 'getStaticProps' and 'getServerSideProps'?",
      answer:
        "'getStaticProps' is used for static site generation and runs at build time, while 'getServerSideProps' is used for server-side rendering and runs on every request. 'getStaticProps' is ideal for content that doesn’t change often, whereas 'getServerSideProps' is suited for dynamic data that changes frequently.",
    },
    {
      question: "How does Next.js handle API routes?",
      answer:
        "Next.js handles API routes by creating files in the 'pages/api' directory. Each file exports an API route handler, which allows you to build API endpoints directly within your Next.js application. These API routes are serverless functions that can handle requests and responses.",
    },
    {
      question: "What is 'Incremental Static Regeneration' (ISR) in Next.js?",
      answer:
        "Incremental Static Regeneration (ISR) allows you to update static content after the site has been built and deployed. You can specify a revalidation period, and Next.js will regenerate the static page in the background when a request is made after the specified time.",
    },
    {
      question: "What is the 'Link' component in Next.js?",
      answer:
        "The 'Link' component in Next.js is used to create client-side navigation between pages. It prefetches the linked page in the background, providing faster navigation and improved performance compared to traditional anchor tags.",
    },
    {
      question: "How does the 'Image' component in Next.js optimize images?",
      answer:
        "The 'Image' component in Next.js optimizes images by automatically resizing, compressing, and serving images in modern formats (like WebP) based on the user’s device and browser. It also provides built-in lazy loading for improved performance.",
    },
    {
      question: "What is the 'App' component in Next.js?",
      answer:
        "The 'App' component in Next.js, defined in '_app.js', is used to initialize pages and allows you to wrap your pages with additional providers or global layout components. It is a top-level component that can be used for setting up global state or styles.",
    },
    {
      question: "What is 'Next.config.js' used for?",
      answer:
        "'Next.config.js' is a configuration file for customizing the behavior of a Next.js application. It allows you to set up various options like custom Webpack configurations, environment variables, redirects, and more.",
    },
    {
      question: "What is 'Dynamic Import' in Next.js?",
      answer:
        "Dynamic import in Next.js allows you to load modules or components asynchronously using the 'import()' function. It helps in code splitting and lazy loading components, improving performance by reducing the initial bundle size.",
    },
    {
      question: "What is the 'Static Folder' in Next.js?",
      answer:
        "The 'static' folder, located at the root of the project, is used to serve static assets such as images, fonts, and other files. Files in this folder are served from the root URL path, making them accessible directly without any processing by Next.js.",
    },
    {
      question: "How does Next.js handle CSS and other static files?",
      answer:
        "Next.js supports importing CSS files and other static assets directly into your components. CSS modules are supported by default, allowing for scoped styles, and static assets can be placed in the 'public' directory for direct access.",
    },
    {
      question: "What is the 'public' directory in Next.js?",
      answer:
        "The 'public' directory in Next.js is used to store static files like images, fonts, and other assets that should be served directly by the server. Files in this directory are accessible from the root URL of the application.",
    },
    {
      question: "What is 'getInitialProps' in Next.js?",
      answer:
        "'getInitialProps' is an asynchronous method that can be used in both pages and custom App components to fetch data before rendering. It is called before rendering and can be used for server-side and client-side data fetching, but it is less recommended in favor of 'getStaticProps' and 'getServerSideProps'.",
    },
    {
      question: "What is the purpose of 'next/image'?",
      answer:
        "'next/image' is a built-in component in Next.js for optimizing images. It provides automatic image resizing, optimization, and responsive behavior, helping to improve the performance and user experience of your application.",
    },
    {
      question: "What is 'next/link' used for?",
      answer:
        "'next/link' is a built-in component for enabling client-side navigation between pages in a Next.js application. It prefetches linked pages in the background, providing faster navigation and enhancing user experience.",
    },
    {
      question: "What is 'API Routes' in Next.js?",
      answer:
        "API Routes in Next.js allow you to create API endpoints within your Next.js application. Files in the 'pages/api' directory define serverless functions that handle HTTP requests, making it possible to build full-stack applications within a Next.js app.",
    },
    {
      question: "What is 'Custom Document' in Next.js?",
      answer:
        "'Custom Document' is a feature in Next.js that allows you to customize the HTML document structure of your application. By creating a '_document.js' file, you can modify the initial HTML structure, including the 'head' and 'body' tags, to add global styles or scripts.",
    },
    {
      question: "What is 'Custom App' in Next.js?",
      answer:
        "'Custom App' allows you to override the default App component used by Next.js. By creating an '_app.js' file, you can add global styles, layout components, or other top-level components that should be present across all pages in your application.",
    },
    {
      question: "How does Next.js support TypeScript?",
      answer:
        "Next.js supports TypeScript out of the box. You can create a 'tsconfig.json' file in the root of your project, and Next.js will automatically detect and use TypeScript for type checking and compilation. Additionally, Next.js provides type definitions for its built-in features.",
    },
    {
      question: "What is 'next/dynamic' and when should you use it?",
      answer:
        "'next/dynamic' is a function that enables dynamic importing of components. It allows you to load components asynchronously and conditionally, which can help in optimizing performance by reducing the initial bundle size and improving loading times.",
    },
    {
      question: "What is the 'next/router' package used for?",
      answer:
        "'next/router' is a package provided by Next.js for handling client-side routing. It allows you to programmatically navigate between pages, access query parameters, and manage the browser history from within your components.",
    },
    {
      question: "What is 'Static Generation with Revalidation' in Next.js?",
      answer:
        "Static Generation with Revalidation is a feature that allows you to regenerate static pages at runtime. By using 'revalidate' in 'getStaticProps', you can specify a time interval for Next.js to regenerate the page and update the content, combining the benefits of static generation with dynamic updates.",
    },
    {
      question: "How does Next.js handle internationalization (i18n)?",
      answer:
        "Next.js provides built-in support for internationalization through the 'next-i18next' package or other i18n libraries. It allows you to manage and serve content in multiple languages, handle routing for different locales, and translate content dynamically based on user preferences.",
    },
    {
      question: "What is 'Serverless Deployment' in Next.js?",
      answer:
        "Serverless deployment in Next.js refers to deploying your application as serverless functions or APIs. Each page or API route can be deployed as an individual serverless function, which can scale automatically and reduce infrastructure management overhead.",
    },
    {
      question: "What is 'Custom Server' in Next.js?",
      answer:
        "'Custom Server' allows you to define your own server to handle requests and customize the server behavior. By using a custom server with Next.js, you can integrate with other middleware, handle custom routing, or add additional server-side logic beyond what Next.js provides by default.",
    },
    {
      question: "What are 'Page Transitions' in Next.js?",
      answer:
        "Page transitions in Next.js refer to the animations or effects applied when navigating between pages. While Next.js does not include built-in page transition features, you can implement them using third-party libraries or custom CSS animations to enhance the user experience during navigation.",
    },
    {
      question: "What is 'Preview Mode' in Next.js?",
      answer:
        "Preview Mode in Next.js allows you to preview drafts or unpublished content before it goes live. By enabling Preview Mode, you can see how changes will look on your site without publishing them, which is useful for content management and content review workflows.",
    },
    {
      question: "What is 'Middleware' in Next.js?",
      answer:
        "Middleware in Next.js allows you to execute code before a request is completed. It can be used for tasks like authentication, redirects, or logging. Middleware functions run on the server and can be applied globally or to specific routes.",
    },
    {
      question: "What is the 'useRouter' hook in Next.js?",
      answer:
        "The 'useRouter' hook provided by Next.js allows you to access the router object within functional components. It provides information about the current route, query parameters, and navigation methods, enabling you to programmatically navigate or react to route changes.",
    },
    {
      question: "How do you implement authentication in Next.js?",
      answer:
        "Authentication in Next.js can be implemented using various methods, including server-side authentication with 'getServerSideProps', client-side authentication with context providers or state management, and third-party authentication services. Implementing authentication typically involves managing user sessions and protecting routes.",
    },
    {
      question: "What is 'Custom Document' used for in Next.js?",
      answer:
        "'Custom Document' in Next.js, defined in '_document.js', allows you to customize the entire HTML document structure. You can modify the 'head' and 'body' tags, add global scripts, or include custom styles that need to be applied across all pages.",
    },
    {
      question: "What is the purpose of 'next.config.js'?",
      answer:
        "'next.config.js' is a configuration file used to customize and extend the behavior of a Next.js application. It allows you to set up custom Webpack configurations, environment variables, redirects, rewrites, and more, enabling fine-grained control over your application's build and runtime behavior.",
    },
    {
      question: "What is 'Server Components' in Next.js?",
      answer:
        "Server Components in Next.js are a new experimental feature that allows you to build components that render on the server only. They enable you to fetch data and render HTML on the server, reducing the amount of JavaScript needed on the client side and improving performance.",
    },
    {
      question: "How does Next.js support API Rate Limiting?",
      answer:
        "API Rate Limiting in Next.js can be implemented using middleware or custom logic within API routes. You can use libraries or custom code to track request rates and limit the number of requests to your API endpoints, ensuring fair usage and protecting your server from abuse.",
    },
    {
      question: "What is 'Dynamic Routing' in Next.js?",
      answer:
        "Dynamic Routing in Next.js refers to the ability to create routes with dynamic segments. By using file names with brackets (e.g., [id].js), you can define routes that accept dynamic parameters and generate pages based on those parameters, enabling flexible and data-driven routing.",
    },
    {
      question: "What is 'next-auth' and how is it used in Next.js?",
      answer:
        "'next-auth' is a popular authentication library for Next.js that simplifies the process of adding authentication to your application. It provides a range of authentication providers, such as OAuth and email/password, and handles session management, user login, and secure access to routes.",
    },
    {
      question: "What is the 'Preview Data' feature in Next.js?",
      answer:
        "'Preview Data' is a feature in Next.js that allows you to preview unpublished or draft content. It enables you to enter Preview Mode and view how content changes will appear before they are published, typically used in conjunction with headless CMS systems.",
    },
    {
      question: "How does Next.js support Progressive Web Apps (PWAs)?",
      answer:
        "Next.js supports Progressive Web Apps (PWAs) through the use of plugins and configurations. By adding a PWA plugin, you can enable features like service workers, offline support, and caching, improving the performance and user experience of your application.",
    },
    {
      question: "What is the 'App Router' in Next.js?",
      answer:
        "The 'App Router' in Next.js is a feature that provides a new routing API for building routes and handling requests. It allows for more control and customization of routing behavior, including nested routes and dynamic segments, enhancing the flexibility of routing in your application.",
    },
    {
      question: "What is the 'Error Boundaries' feature in Next.js?",
      answer:
        "Error Boundaries in Next.js are used to catch JavaScript errors that occur during rendering, in lifecycle methods, or in constructors of the entire tree below them. You can use error boundaries to handle errors gracefully and provide fallback UI or error messages to users.",
    },
    {
      question: "How do you manage environment variables in Next.js?",
      answer:
        "In Next.js, environment variables can be managed using the '.env.local', '.env.development', and '.env.production' files. You define variables in these files, and Next.js automatically loads them based on the environment. Access environment variables in your code using 'process.env.<VARIABLE_NAME>'.",
    },
    {
      question: "What is the 'next-optimized-images' plugin used for?",
      answer:
        "'next-optimized-images' is a plugin that optimizes image loading in Next.js applications. It provides features like image compression, resizing, and format conversion to improve performance and reduce the size of images served to users.",
    },
    {
      question: "How does Next.js support custom caching strategies?",
      answer:
        "Next.js supports custom caching strategies through configuration and middleware. You can define caching headers and strategies for static files and API responses using custom server logic, or leverage middleware to control caching behavior at a finer level.",
    },
    {
      question: "What is the 'next-pwa' plugin used for?",
      answer:
        "'next-pwa' is a plugin for integrating Progressive Web App (PWA) features into Next.js applications. It enables service workers, offline capabilities, and caching strategies, helping you create a more reliable and performant web application.",
    },
    {
      question: "How does Next.js handle internationalized routing?",
      answer:
        "Next.js handles internationalized routing using built-in support for locales and routing based on locale-specific paths. You can configure different locales and set up routing to handle different languages, providing a localized experience for users.",
    },
    {
      question: "What are 'Static and Dynamic Pages' in Next.js?",
      answer:
        "In Next.js, static pages are pre-rendered at build time, while dynamic pages are generated on-demand based on user requests. Static pages are ideal for content that doesn't change frequently, while dynamic pages are suited for content that updates regularly or is user-specific.",
    },
    {
      question: "What is the 'Head' component in Next.js?",
      answer:
        "The 'Head' component in Next.js is used to modify the HTML head of a page, allowing you to set meta tags, titles, and other head elements. It helps you manage SEO and page metadata dynamically within your React components.",
    },
    {
      question: "What is 'Next.js Middleware' and how is it used?",
      answer:
        "Next.js Middleware is a feature that allows you to execute code before a request is completed. It can be used to handle authentication, redirects, or other tasks that need to be performed before serving the response. Middleware functions run on the server and can be applied globally or to specific routes.",
    },
    {
      question: "How does Next.js support GraphQL?",
      answer:
        "Next.js supports GraphQL by integrating with GraphQL clients like Apollo Client or Relay. You can fetch GraphQL data in your components using these clients or through server-side methods like 'getServerSideProps' or 'getStaticProps', enabling efficient data management and querying.",
    },
  ];

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    currentItems,
    onPageChange,
    onItemsPerPageChange,
  } = usePagination(nextJSQnaList, 10);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
        NEXT JS BlOG
      </h1>
      {currentItems.map((qa, index) => (
        <div key={index} className="mb-5 pb-3 border-b border-gray-300">
          <h2 className="text-lg text-black">{startIndex + index}.&nbsp;{qa.question}</h2>
          <p className="text-gray-600">{qa.answer}</p>
        </div>
      ))}
      <Pagination
        totalItems={nextJSQnaList.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        onItemsPerPageChange={onItemsPerPageChange}
      />
    </div>
  );
};

export default NextJSBlog;
