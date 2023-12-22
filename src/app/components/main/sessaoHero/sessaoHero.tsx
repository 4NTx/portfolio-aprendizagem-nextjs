import Link from "next/link";
import styles from "./sessaoHero.module.css";
import "react-toastify/dist/ReactToastify.css";

const SessaoHero: React.FC = () => {
  return (
    <div>
      <h1 className={styles.tituloHeader}>
        Lorem ipsum dolor sit amet <br />
        <span className={styles.tituloHeaderSpan}>
          consectetur adipisicing elit.
        </span>
      </h1>
      <p className={styles.textoHeader}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At repudiandae
        consequuntur praesentium recusandae voluptatem eius harum ducimus
        quisquam, sit debitis, neque sequi provident, inventore fugit reiciendis
        architecto aspernatur accusantium ratione.
      </p>{" "}
      <button className={styles.botaoUm}>Acessar</button>
      <button className={styles.botaoDois}>Contato</button>
    </div>
  );
};
export default SessaoHero;
