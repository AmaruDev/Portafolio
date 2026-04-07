import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>

      <div className={styles.container}>

        {/* LADO IZQUIERDO */}
        <div className={styles.left}>
          <h2>Sobre mí</h2>
          <p>
            Soy desarrolladora frontend con interés en crear experiencias
            interactivas y visuales. Me gusta combinar diseño y código
            para construir interfaces únicas.
          </p>
        </div>

        {/* LADO DERECHO */}
        <div className={styles.right}>
          <h2>Habilidades</h2>

          <div className={styles.skills}>
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Blender</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;