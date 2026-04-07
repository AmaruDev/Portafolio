import styles from "./Hero.module.css";
import { useState } from "react";

function Hero() {
  const [mode, setMode] = useState("avatar");

  return (
    <section id="home" className={styles.hero}>

      <div className={styles.heroVisual}>
        {mode === "avatar" ? (
          <img src="/avatar.png" alt="Avatar" />
        ) : (
          <img src="/foto.png" alt="Foto real" />
        )}
      </div>

      <div className={styles.heroText}>
        <h1>Amanda Valenzuela</h1>
        <p>Frontend Developer crafting interactive experiences</p>
      </div>

      <button onClick={() => setMode(mode === "avatar" ? "real" : "avatar")}>
        Cambiar modo
      </button>

    </section>
  );
}

export default Hero;