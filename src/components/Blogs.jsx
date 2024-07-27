import BlogContentCard from "./BlogContentCard";
import "../App.css";

const Blogs = () => {
  const blogs = [
    {
      title: "JavaScript Blog",
      internalLink: "/blogs/javascript",
    },
    {
      title: "React JS Blog",
      internalLink: "/blogs/reactjs",
    },
    {
      title: "Next JS Blog",
      internalLink: "/blogs/nextjs",
    },
    {
      title: "System Design Blog",
      internalLink: "/blogs/system-design",
    },
    {
      title: "Miscellaneous Blog",
      internalLink: "/blogs/miscellaneous",
    },
  ];

  return (
    <section id="blogs" className="blog-section">
      <span className="section-header-btn">Blogs</span>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <BlogContentCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
