"use client";
import { Terminal } from "./components/main/terminal/terminal";
import styles from "./page.module.css";
import Navbar from "./components/main/navbar/navbar";
import { Flip, ToastContainer } from "react-toastify";

const Inicio: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className={styles.container}>
        <div>
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
          </p>{" "}
          <button className={styles.botaoUm}>Acessar</button>
          <button className={styles.botaoDois}>Contato</button>
        </div>
        <div className={styles.terminal}>
          <Terminal />
        </div>
      </main>
      <ToastContainer
        position="bottom-center"
        limit={3}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        transition={Flip}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
};

export default Inicio;
