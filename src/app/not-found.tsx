import Link from "next/link";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.div404}>
        <span>4</span>
        <div className={styles.pokebola}>
          <Image
            src="/imagens/pokebola.png"
            alt="Pokebola"
            width={150}
            height={150}
          />
        </div>
        <span>4</span>
      </div>
      <p className={styles.mensagem}>
        <span>Oops!</span> Não achamos esta página.
      </p>
      <Link href="/" className={styles.botao}>
        VOLTAR
      </Link>
    </div>
  );
}
