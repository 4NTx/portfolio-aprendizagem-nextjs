import "./globals.css";
import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <section className={styles.container}>
      <div className={styles.imagens}>
        <Image
          src="/imagens/lugia.gif"
          alt="Lugia"
          width={250}
          height={250}
          className={styles.lugia}
          priority
        />
        <div className={styles.pokebola}>
          <Image
            src="/imagens/pokebola.png"
            alt="Pokebola"
            width={160}
            height={160}
            priority
          />
        </div>
        <p className={styles.texto}>
          Carregando<span className={styles.pontos}>...</span>
        </p>
      </div>
    </section>
  );
}
