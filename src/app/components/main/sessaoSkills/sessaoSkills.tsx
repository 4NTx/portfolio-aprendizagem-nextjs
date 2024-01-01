import styles from "./sessaoSkills.module.css";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import React, { useState } from "react";

const tecnologias = [
  {
    src: "/imagens/tecnologias/nestjs.svg",
    alt: "NestJS",
    titulo: "NestJS",
    descricao: "Framework Node.js para back-end eficiente e escalável.",
  },
  {
    src: "/imagens/tecnologias/python.svg",
    alt: "Python",
    titulo: "Python",
    descricao: "Linguagem de programação poderosa e fácil de aprender.",
  },
  {
    src: "/imagens/tecnologias/django.svg",
    alt: "Django",
    titulo: "Django",
    descricao: "Framework de alto nível em Python para desenvolvimento web rápido.",
  },
  {
    src: "/imagens/tecnologias/java.svg",
    alt: "Java",
    titulo: "Java",
    descricao: "Linguagem robusta para aplicações de grande escala e Android.",
  },
  {
    src: "/imagens/tecnologias/html.svg",
    alt: "HTML5",
    titulo: "HTML5",
    descricao: "Padrão moderno para estruturação de conteúdo na web.",
  },
  {
    src: "/imagens/tecnologias/css.svg",
    alt: "CSS3",
    titulo: "CSS3",
    descricao: "Linguagem de estilos para design visual de páginas web.",
  },
  {
    src: "/imagens/tecnologias/nextjs.svg",
    alt: "NextJS",
    titulo: "NextJS",
    descricao: "Framework React com renderização no servidor para aplicações web.",
  },
  {
    src: "/imagens/tecnologias/angular.svg",
    alt: "Angular",
    titulo: "Angular",
    descricao: "Framework estruturado para aplicações web dinâmicas.",
  },
  {
    src: "/imagens/tecnologias/typescript.svg",
    alt: "TypeScript",
    titulo: "TypeScript",
    descricao: "Superset de JavaScript com tipos estáticos para desenvolvimento escalável.",
  },
  {
    src: "/imagens/tecnologias/flutter.svg",
    alt: "Flutter",
    titulo: "Flutter",
    descricao: "SDK do Google para UIs nativas em multiplataformas.",
  },
  {
    src: "/imagens/tecnologias/github.svg",
    alt: "GitHub",
    titulo: "GitHub",
    descricao: "Plataforma de hospedagem de código e colaboração com Git.",
  },
  {
    src: "/imagens/tecnologias/git.svg",
    alt: "Git",
    titulo: "Git",
    descricao: "Sistema de controle de versão descentralizado e eficiente.",
  },
  {
    src: "/imagens/tecnologias/postman.svg",
    alt: "Postman",
    titulo: "Postman",
    descricao: "Ferramenta essencial para desenvolvimento e teste de APIs.",
  },
  {
    src: "/imagens/tecnologias/vscode.svg",
    alt: "Visual Studio Code",
    titulo: "Visual Studio Code",
    descricao: "Editor de código versátil e extensível da Microsoft.",
  },
  {
    src: "/imagens/tecnologias/intellij.svg",
    alt: "IntelliJ IDEA",
    titulo: "IntelliJ IDEA",
    descricao: "IDE poderoso para desenvolvimento Java, Kotlin e Android.",
  },
  {
    src: "/imagens/tecnologias/androidstudio.svg",
    alt: "Android Studio",
    titulo: "Android Studio",
    descricao: "IDE oficial para desenvolvimento Android.",
  },
  {
    src: "/imagens/tecnologias/arduino.svg",
    alt: "Arduino",
    titulo: "Arduino",
    descricao: "Plataforma de prototipagem eletrônica de código aberto.",
  },
  {
    src: "/imagens/tecnologias/mariadb.svg",
    alt: "MariaDB",
    titulo: "MariaDB",
    descricao: "Sistema de gerenciamento de banco de dados SQL de alto desempenho.",
  },
  {
    src: "/imagens/tecnologias/postgresql.svg",
    alt: "PostgreSQL",
    titulo: "PostgreSQL",
    descricao: "Sistema de banco de dados SQL robusto e repleto de recursos.",
  },
  {
    src: "/imagens/tecnologias/prisma.svg",
    alt: "Prisma",
    titulo: "Prisma",
    descricao: "ORM moderno para Node.js e TypeScript.",
  },
  {
    src: "/imagens/tecnologias/sql.svg",
    alt: "SQL",
    titulo: "SQL",
    descricao: "Linguagem padrão para gerenciamento de banco de dados relacional.",
  },
];

const SessaoSkills: React.FC = () => {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const quantidadeExibida = mostrarTodos ? tecnologias.length : 8;

  return (
    <>
      <div className={styles.titulo}>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing <span>elit.</span>
        </h1>
      </div>

      <div className={styles.sessaoSkills}>
        {tecnologias.slice(0, quantidadeExibida).map((tecnologia, index) => (
          <div key={index} className={styles.cartaoSkills}>
            <div className={styles.iconTecnologia}>
              <Image
                src={tecnologia.src}
                alt={tecnologia.alt}
                width={50}
                height={50}
              />
            </div>
            <div className={styles.tecnologiaInfo}>
              <h3 className={styles.tecnologiaTitulo}>{tecnologia.titulo}</h3>
              <p className={styles.tecnologiaDescricao}>
                {tecnologia.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!mostrarTodos ? (
        <button
          onClick={() => setMostrarTodos(true)}
          className={styles.botaoVerMais}
        >
          Ver Mais
        </button>
      ) : (
        <button
          onClick={() => setMostrarTodos(false)}
          className={styles.botaoVerMenos}
        >
          Ver Menos
        </button>
      )}
    </>
  );
};
export default SessaoSkills;
