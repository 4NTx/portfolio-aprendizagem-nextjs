import Link from "next/link";
import styles from "./not-found.module.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#233E47] font-mono select-none">
      <div className="flex items-center text-[8rem] mb-5">
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
      <p className="mb-5 text-[1.5rem]">
        <span className="text-[#f4dc26]">Oops!</span> Não achamos esta página.
      </p>
      <Link href="/" legacyBehavior>
        <a className="py-2.5 px-5 bg-[#f4dc26] text-[#233E47] rounded-full no-underline cursor-pointer text-[1.1rem] transition-colors duration-300 hover:bg-yellow-300/75 font-sans">
          VOLTAR
        </a>
      </Link>
    </div>
  );
}
