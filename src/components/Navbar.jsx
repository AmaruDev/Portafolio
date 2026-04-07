import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <div className={styles.logo}>AV</div>

        <ul className={styles.links}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;