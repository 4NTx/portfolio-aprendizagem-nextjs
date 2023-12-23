"use client";
import { Terminal } from "./components/main/terminal/terminal";
import SessaoSkills from "./components/main/sessaoSkills/sessaoSkills";
import SessaoHero from "./components/main/sessaoHero/sessaoHero";
import styles from "./page.module.css";
import Navbar from "./components/main/navbar/navbar";
import { Flip, ToastContainer } from "react-toastify";

const Inicio: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className={styles.heroContainer}>
        <div>
          <SessaoHero />
        </div>
        <div className={styles.terminal}>
          <Terminal />
        </div>
      </main>

      <section className={styles.skillsContainer}>
        <div>
          <SessaoSkills />
        </div>
      </section>
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
