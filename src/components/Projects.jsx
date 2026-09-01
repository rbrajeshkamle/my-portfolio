import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
const projects = [
{
title: "Sargam Music",
category: "React Music Application",
description:
"A modern music streaming interface with playlists and responsive design.",
tech: ["React", "JavaScript", "CSS"],
},
{
title: "My Portfolio",
category: "Personal Portfolio",
description:
"A modern animated portfolio built with React and Framer Motion.",
tech: ["React", "Framer Motion", "CSS"],
},
{
title: "Task Manager",
category: "Productivity App",
description:
"A clean task management application for organizing daily work.",
tech: ["React", "Node.js", "MongoDB"],
},
];

return ( <section className="section projects" id="projects"> <div className="section-container">
<motion.div
className="section-heading"
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
> <p>MY WORK</p> <h2>Featured <span>Projects</span></h2>
</motion.div>
   <div className="projects-grid">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="project-card glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          whileHover={{ y: -10 }}
        >
          <div className="project-image">
            <span>🚀</span>
          </div>

          <div className="project-content">
            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href="#" aria-label="GitHub">
                <FaGithub />
                Code
              </a>

              <a href="#" aria-label="Live Demo">
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);
}

export default Projects;
