import Link from "next/link";
import styles from "./sessaoProjetos.module.css";
import "react-toastify/dist/ReactToastify.css";

const dadosProjetos = [
  {
    nome: "Projeto 1",
    privado: true,
    descricao: "Descrição do Projeto 1",
    linguagem: "JavaScript",
    ultimaAtualizacao: "2024-01-01",
    icone: "/imagens/tecnologias/sql.svg",
  },
  {
    nome: "Projeto 1",
    privado: false,
    descricao: "Descrição do Projeto 1",
    linguagem: "JavaScript",
    ultimaAtualizacao: "2024-01-01",
    icone: "/imagens/tecnologias/sql.svg",
  },
];

const SessaoProjetos = () => {
  const obterIconeProjeto = (icone: string) => {
    const caminhoIcone = icone || "/imagens/tecnologias/sql.svg";
    return (
      <img
        src={caminhoIcone}
        className={styles.iconeProjeto}
        alt="Ícone do Projeto"
      />
    );
  };

  return (
    <div className={styles.sessaoProjeto}>
      <h2>Meus Projetos</h2>
      <div className={styles.projetos}>
        {dadosProjetos.map((projeto, indice) => (
          <div key={indice} className={styles.projeto}>
            <div className={styles.cabecalhoProjeto}>
              {obterIconeProjeto(projeto.icone)}
              <h3>
                {projeto.nome} {projeto.privado ? "(Privado)" : ""}
              </h3>
            </div>
            <p>{projeto.descricao}</p>
            <div className={styles.detalhesProjeto}>
              <span>Linguagem: {projeto.linguagem}</span>
              <span>Última Atualização: {projeto.ultimaAtualizacao}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessaoProjetos;
