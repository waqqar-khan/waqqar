import BlogContentCard from "./BlogContentCard";
import "../App.css";

const Blogs = () => {
  const blogs = [
    {
      title: "JavaScript Blog",
      link: "https://waqqar.vercel.app/",
    },
    {
      title: "React JS Blog",
      link: "https://waqqar.vercel.app/",
    },
    {
      title: "GIT & GITHUB Blog",
      link: "https://waqqar.vercel.app/",
    },
    {
      title: "Next JS Blog",
      link: "https://waqqar.vercel.app/",
    },
    {
      title: "HTML & CSS Blog",
      link: "https://waqqar.vercel.app/",
    },
    {
      title: "Interview Blog",
      link: "https://waqqar.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <span className="section-header-btn">Blogs</span>
      <div className="project-cards">
        {blogs.map((blog, index) => (
          <BlogContentCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
