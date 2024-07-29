import "../../App.css";

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
      question: "What is the purpose of a Service Worker?",
      answer:
        "A Service Worker is a script that runs in the background and can intercept network requests, cache resources, and enable offline functionality, improving performance and user experience.",
    },
    {
      question:
        "How does the caret (^) and tilde (~) symbols affect package versions in package.json?",
      answer:
        "The caret (^) will update to a minor patch update version, and the tilde (~) will update to a major patch update version. It is always safer to update to a minor version because a major version may break many things​.",
    },
    {
      question:
        "What is the difference between package-lock.json and package.json?",
      answer:
        "package-lock.json records the exact version of each package installed, while package.json records the version ranges. Both files should be committed to GitHub to ensure consistency across environments.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
        MISCELLANEOUS CONCEPTS
      </h1>
      {qnaList.map((qa, index) => (
        <div key={index} className="mb-5 pb-3 border-b border-gray-300">
          <h2 className="text-lg text-black">{qa.question}</h2>
          <p className="text-gray-600">{qa.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default MiscellaneousBlog;
