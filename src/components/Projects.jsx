import ProjectCard from "./ProjectCard";
import "../App.css";

const Projects = () => {
  const projects = [
    {
      title: "Countries Info",
      description:
        "Countries Info is a web application that offers comprehensive insights into countries worldwide, leveraging the REST Countries API. Easily find specific countries or regions using intuitive search and filtering capabilities. Countries Info provides a rich source of information right at your fingertips.",
      link: "https://countries-info-eta-six.vercel.app/",
    },
    {
      title: "Shopping Mart",
      description:
        "Shopping Mart is an e-commerce platform designed to provide a seamless shopping experience for users. With a user-friendly interface and robust functionality, Shopping Mart allows customers to browse a wide range of products, add them to their cart.",
      link: "https://shopping-mart-eight.vercel.app/",
    },
    {
      title: "Todo App",
      description:
        "Todo List is a minimalist web application designed to help you stay organized and productive. Whether managing daily tasks, tracking projects, or prioritizing assignments, Todo List simplifies your workflow with an intuitive interface and essential features. Easily add, edit, and delete tasks to keep track of your daily agenda.",
      link: "https://todo-app-plum-three-52.vercel.app/",
    },
    {
      title: "Background Changer",
      description:
        "The Background Changer web application allows users to dynamically alter the background color of a webpage with a simple click. It provides an interactive way to explore different color schemes and visualize how different backgrounds can affect the look and feel of a website.",
      link: "https://background-changer-snowy.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <span className="section-header-btn">Live Personal Projects</span>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
