import "../../App.css";

const NextJSBlog = () => {
  const qnaList = [
    {
      question: "What is Next.js and what are its benefits?",
      answer:
        "Next.js is a React framework that provides server-side rendering, static site generation, and easy routing. Its benefits include improved performance, SEO optimization, and a simpler development experience.",
    },
    {
      question: "How does Next.js handle routing?",
      answer:
        "Next.js uses a file-based routing system where files in the `pages` directory automatically become routes. Dynamic routing can be achieved using file names enclosed in brackets, e.g., `[id].js`.",
    },
    {
      question: "What are `getServerSideProps` and `getStaticProps`?",
      answer:
        "`getServerSideProps` fetches data on each request and is used for server-side rendering. `getStaticProps` fetches data at build time and is used for static site generation.",
    },
    {
      question: "What is the purpose of API routes in Next.js?",
      answer:
        "API routes in Next.js allow you to create serverless functions that can be deployed alongside your Next.js app. They can handle server-side logic like form submissions and database queries.",
    },
    {
      question:
        "How do you implement incremental static regeneration in Next.js?",
      answer:
        "Incremental static regeneration allows you to update static content after deployment. Use the `revalidate` property in `getStaticProps` to specify the interval for regeneration.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-5 md:pt-8 lg:pt-14 font-sans mt-14">
      <h1 className="italic text-2xl text-center text-purple-800 font-serif font-semibold pb-8">
        NEXT JS BlOG
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

export default NextJSBlog;
