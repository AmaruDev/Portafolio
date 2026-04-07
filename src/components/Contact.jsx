import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      <h2>Contáctame</h2>

      {/* LINKS */}
      <div className={styles.links}>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:tuemail@gmail.com">
          Email
        </a>
      </div>

      {/* FORMULARIO */}
      <form className={styles.form}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" rows="5"></textarea>
        <button type="submit">Enviar</button>
      </form>

    </section>
  );
}

export default Contact;