import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Proyectos</h2>

      <div className={styles.container}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;