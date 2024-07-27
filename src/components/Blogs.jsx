import BlogContentCard from "./BlogContentCard";
import "../App.css";

const Blogs = () => {
  const blogs = [
    {
      title: "JavaScript Blog",
      internalLink: "/javascript",
    },
    {
      title: "React JS Blog",
      internalLink: "/reactjs",
    },
    {
      title: "Next JS Blog",
      internalLink: "/nextjs",
    },
    {
      title: "System Design Blog",
      internalLink: "/system-design",
    },
    {
      title: "Miscellaneous Blog",
      internalLink: "/miscellaneous",
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
