"use client";
import { Terminal } from "./components/terminal/terminal";
import styles from "./page.module.css";

const Inicio: React.FC = () => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.tituloHeader}>
          <h1 className={styles.tituloHeader}>
            Lorem ipsum dolor sit amet <br />
            <span className={styles.tituloHeaderSpan}>
              consectetur adipisicing elit.
            </span>
          </h1>
          <p className={styles.textoHeader}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
            repudiandae consequuntur praesentium recusandae voluptatem eius
            harum ducimus quisquam, sit debitis, neque sequi provident,
            inventore fugit reiciendis architecto aspernatur accusantium
            ratione.
          </p>
        </div>
        <div>
          <Terminal />
        </div>
      </header>
    </>
  );
};

export default Inicio;
