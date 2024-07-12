import PropTypes from "prop-types";
import "../App.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
