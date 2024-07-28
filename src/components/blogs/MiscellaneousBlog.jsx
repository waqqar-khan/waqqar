import "../../App.css";
import BlogButton from "./BlogButton";

const MiscellaneousBlog = () => {
  const qnaList = [
    {
      question: "What is the purpose of a Content Delivery Network (CDN)?",
      answer:
        "A CDN distributes content across multiple servers globally to reduce latency and improve load times by serving content from a location closest to the user.",
    },
    {
      question: "What is the difference between REST and GraphQL?",
      answer:
        "REST uses multiple endpoints to access different resources and requires multiple requests to gather related data. GraphQL allows you to query exactly the data you need in a single request, using a flexible schema.",
    },
    {
      question:
        "What is Continuous Integration (CI) and Continuous Deployment (CD)?",
      answer:
        "CI is the practice of automatically testing and integrating code changes into a shared repository frequently. CD extends this by automatically deploying changes to production, ensuring rapid and reliable releases.",
    },
    {
      question:
        "What are microservices and how do they differ from monolithic architecture?",
      answer:
        "Microservices are a design pattern where an application is composed of small, independent services that communicate over APIs. This contrasts with monolithic architecture, where the entire application is built as a single, unified unit.",
    },
    {
      question: "What is the purpose of a Service Worker?",
      answer:
        "A Service Worker is a script that runs in the background and can intercept network requests, cache resources, and enable offline functionality, improving performance and user experience.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 font-sans mt-14">
      <BlogButton />
      <h1 className="italic text-2xl text-center text-red-700 font-mono font-semibold pb-8">
        MISCELLANEOUS CONCEPTS
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

export default MiscellaneousBlog;
