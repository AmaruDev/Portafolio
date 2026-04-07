import styles from "./ProjectCard.module.css";

function ProjectCard({ project, reverse }) {
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>

      <div className={styles.image}>
        <img src={project.imagen} alt={project.titulo} />
      </div>

      <div className={styles.info}>
        <h3>{project.titulo}</h3>
        <p>{project.descripcion}</p>

        <div className={styles.meta}>
          <span>Creado: {project.fechaCreacion}</span>
          <span>Actualizado: {project.fechaModificacion}</span>
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Ver código
        </a>
      </div>

    </article>
  );
}

export default ProjectCard;