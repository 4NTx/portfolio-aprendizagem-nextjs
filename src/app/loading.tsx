import './globals.css'
import Image from 'next/image';
import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <Image src="/imagens/pikachu.gif" alt="Carregando" width={300} height={300} priority={true} className={styles.pikachu} />
                <div className={styles.pokebola}>
                    <Image src="/imagens/pokebola.png" alt="Pokebola" width={150} height={150} priority={true} className={styles.pokebola} />
                </div>
                <div className={styles.titulo}>
                    Carregando<span className={styles.pontos}>...</span>
                </div>
            </div>
        </div>
    );
}