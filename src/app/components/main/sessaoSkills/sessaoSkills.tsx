import styles from "./sessaoSkills.module.css";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import React, { useState } from "react";

const tecnologias = [
  {
    src: "/imagens/tecnologias/nestjs.svg",
    alt: "NestJS",
    titulo: "NestJS",
    descricao: "Framework Node.js para back-end escalável.",
  },
  {
    src: "/imagens/tecnologias/python.svg",
    alt: "Python",
    titulo: "Python",
    descricao: "Linguagem versátil para web e ciência de dados.",
  },
  {
    src: "/imagens/tecnologias/django.svg",
    alt: "Django",
    titulo: "Django",
    descricao: "Framework Python para aplicações web rápidas.",
  },
  {
    src: "/imagens/tecnologias/java.svg",
    alt: "Java",
    titulo: "Java",
    descricao: "Linguagem para aplicações empresariais e móveis.",
  },
  {
    src: "/imagens/tecnologias/nextjs.svg",
    alt: "NextJS",
    titulo: "NextJS",
    descricao: "Framework React para produção e SSR.",
  },
  {
    src: "/imagens/tecnologias/html.svg",
    alt: "HTML5",
    titulo: "HTML5",
    descricao: "Linguagem de marcação para páginas web.",
  },
  {
    src: "/imagens/tecnologias/css.svg",
    alt: "CSS3",
    titulo: "CSS3",
    descricao: "Linguagem de estilo para design de interfaces.",
  },
  {
    src: "/imagens/tecnologias/angular.svg",
    alt: "Angular",
    titulo: "Angular",
    descricao: "Framework web dinâmico mantido pelo Google.",
  },
  {
    src: "/imagens/tecnologias/typescript.svg",
    alt: "TypeScript",
    titulo: "TypeScript",
    descricao: "JavaScript com tipagem estática.",
  },
  {
    src: "/imagens/tecnologias/flutter.svg",
    alt: "Flutter",
    titulo: "Flutter",
    descricao: "Framework Google para UI nativas em várias plataformas.",
  },
  {
    src: "/imagens/tecnologias/github.svg",
    alt: "GitHub",
    titulo: "GitHub",
    descricao: "Hospedagem de código-fonte com Git.",
  },
  {
    src: "/imagens/tecnologias/git.svg",
    alt: "Git",
    titulo: "Git",
    descricao: "Controle de versões distribuído.",
  },
  {
    src: "/imagens/tecnologias/postman.svg",
    alt: "Postman",
    titulo: "Postman",
    descricao: "Ferramenta para desenvolvimento e teste de APIs.",
  },
  {
    src: "/imagens/tecnologias/vscode.svg",
    alt: "Visual Studio Code",
    titulo: "Visual Studio Code",
    descricao: "Editor de código da Microsoft com suporte extenso.",
  },
  {
    src: "/imagens/tecnologias/intellij.svg",
    alt: "IntelliJ IDEA",
    titulo: "IntelliJ IDEA",
    descricao: "IDE avançado para desenvolvimento Java e Android.",
  },
  {
    src: "/imagens/tecnologias/androidstudio.svg",
    alt: "Android Studio",
    titulo: "Android Studio",
    descricao: "Ambiente oficial para desenvolvimento Mobile",
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
