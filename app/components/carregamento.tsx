import React from 'react';
import Image from 'next/image';
import styles from './carregamento.module.css';
interface CarregamentoProps {
  carregando: boolean;
}

const Carregamento: React.FC<CarregamentoProps> = ({ carregando }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image src="/imagens/pikachu.gif" alt="Carregando" width={300} height={300} className="{styles.pikachu}" />
      {carregando && (
        <div className={styles.pokebola}>
          <img src="/imagens/pokebola.png" alt="Pokebola" width={150} height={150} className={styles.pokebola}
          />
        </div>
      )}
      <div className={styles.titulo}>
        Carregando<span className={styles.pontos}>...</span>
      </div>
    </div>
  );
};

export default Carregamento;