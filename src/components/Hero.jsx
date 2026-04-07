import { useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [mode, setMode] = useState("avatar");

  return (
    <section id="home">
      <div className="hero">

        <div className="hero-visual">
          {mode === "avatar" ? (
            <img src="../img/avatar.png" alt="Avatar" />
          ) : (
            <img src="../img/foto.png" alt="Foto real" />
          )}
        </div>

        <h1>Amanda Valenzuela</h1>
        <p>Frontend Developer crafting interactive experiences</p>

        <button onClick={() => setMode(mode === "avatar" ? "real" : "avatar")}>
          Cambiar modo
        </button>

      </div>
    </section>
  );
}

export default Hero;