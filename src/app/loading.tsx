import './globals.css'
import Image from 'next/image';
import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className="bg-[#233E47] select-none">
            <div className="min-h-screen flex flex-col justify-center items-center font-mono">
                <Image src="/imagens/pikachu.gif" alt="Carregando" width={300} height={300} priority={true} className={styles.pikachu} />
                <div className={styles.pokebola}>
                    <Image src="/imagens/pokebola.png" alt="Pokebola" width={160} height={160} priority={true} />
                </div>
                <div className="text-[1.5rem] mt-5">
                    Carregando<span className={styles.pontos}>...</span>
                </div>
            </div>
        </div>
    );
}