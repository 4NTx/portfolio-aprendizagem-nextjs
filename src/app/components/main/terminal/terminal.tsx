import { useEffect, useState, useRef, ReactNode } from "react";
import React from "react";
import {
  formatarHoraISOCompleta,
  formatarDataISO,
} from "../../../lib/util/tempo";
import styles from "./terminal.module.css";

const aguardar = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
const simularDigitacao = () => 50;

function Info({
  tipo,
  children,
}: {
  tipo: "log" | "erro";
  children: ReactNode;
}) {
  const cor = tipo === "log" ? styles.textoVerde : styles.textoVermelho;
  const textoTipo = tipo === "log" ? "LOG" : "ERROR";
  const tempoAtual = formatarHoraISOCompleta(new Date());
  const dataAtual = formatarDataISO(new Date());

  const possuiConteudo = React.Children.toArray(children).some((child) =>
    typeof child === "string" ? child.trim() !== "" : true
  );

  if (possuiConteudo) {
    return (
      <div>
        <span className={cor}>[Nest]</span>
        <span className={cor}> 29512 </span>
        <span className={cor}> - </span>
        <span className={styles.TextoBranco}>{dataAtual}, </span>
        <span className={styles.TextoBranco}>{tempoAtual}</span>
        <span className={cor}> {textoTipo} </span> {children}
      </div>
    );
  }
  return null;
}

export function Terminal() {
  const [comando, setComando] = useState("");
  const [argumentos, setArgumentos] = useState("");
  const [carregando, setCarregando] = useState<ReactNode | null>(null);
  const [saida, setSaida] = useState<ReactNode[]>([]);
  const [sucesso, setSucesso] = useState<ReactNode>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function simularTerminal() {
      const comandoCompleto = "npm run start";
      const argumentosCompletos = " --watch";
      const linhasSaida = [
        <Info key="1" tipo="log">
          <span className={styles.textoAmarelo}>[NestFactory] </span>‎
          <span className={styles.textoVerde}>
            Starting Nest application...
          </span>
        </Info>,
        <Info key="2" tipo="log">
          <span className={styles.textoAmarelo}>[InstanceLoader] </span>‎
          <span className={styles.textoVerde}>
            AppModule dependencies initialized
          </span>
          <span className={styles.textoAmarelo}> +82ms</span>
        </Info>,
        <Info key="3" tipo="log">
          <span className={styles.textoAmarelo}>[InstanceLoader] </span>‎
          <span className={styles.textoVerde}>
            TypeOrmModule dependencies initialized
          </span>
          <span className={styles.textoAmarelo}> +0ms</span>
        </Info>,
        <Info key="4" tipo="log">
          <span className={styles.textoAmarelo}>[InstanceLoader] </span>‎
          <span className={styles.textoVerde}>
            PassportModule dependencies initialized
          </span>
          <span className={styles.textoAmarelo}> +0ms</span>
        </Info>,
        <Info key="5" tipo="log">
          <span className={styles.textoAmarelo}>[InstanceLoader] </span>‎
          <span className={styles.textoVerde}>
            JwtModule dependencies initialized
          </span>
          <span className={styles.textoAmarelo}> +0ms</span>
        </Info>,
        <Info key="6" tipo="log">
          <span className={styles.textoAmarelo}>[InstanceLoader] </span>‎
          <span className={styles.textoVerde}>
            TypeOrmCoreModule dependencies initialized
          </span>
          <span className={styles.textoAmarelo}> +0ms</span>
        </Info>,
        <Info key="7" tipo="log">
          <span className={styles.textoAmarelo}>[RouterExplorer] </span>‎
          <span className={styles.textoVerde}>
            Mapped /dados/media/:estado, GET route
          </span>
          <span className={styles.textoAmarelo}> +0ms</span>
        </Info>,
        <Info key="8" tipo="log">
          <span className={styles.textoAmarelo}>[NestApplication] </span>‎
          <span className={styles.textoVerde}>
            Nest application successfully started
          </span>
          <span className={styles.textoAmarelo}> +3ms</span>
        </Info>,
      ];

      for (let i = 0; i < comandoCompleto.length; i++) {
        setComando(comandoCompleto.substring(0, i + 1));
        await aguardar(simularDigitacao());
      }

      for (let i = 0; i < argumentosCompletos.length; i++) {
        setArgumentos(argumentosCompletos.substring(0, i + 1));
        await aguardar(simularDigitacao());
      }

      for (let i = 0; i < 3; i++) {
        setCarregando(
          <>
            <br />
            &gt; portfolio-4ntx@2.0.9 start
            <br />
            &gt; nest start
            <br />
            {Array(i + 1)
              .fill(".")
              .join("")}
          </>
        );
        await aguardar(600);
      }

      const saidaAtualizada: ReactNode[] = [];
      for (const linha of linhasSaida) {
        saidaAtualizada.push(linha);
        setSaida([...saidaAtualizada]);
        await aguardar(simularDigitacao());
      }

      setSucesso(
        <Info tipo="erro">
          {" "}
          <span className={styles.textoAmarelo}>[NestApplication] </span>{" "}
          <span className={styles.textoVermelho}>
            Error: listen EADDRINUSE: address already in use :::3000
          </span>
          <span className={styles.textoAmarelo}> +2ms</span>
          <br />
          <p>Error: listen EADDRINUSE: address already in use :::3000</p>
          <p> at Server.setupListenHandle [as _listen2] (node:net:1872:16)</p>
          <p> at listenInCluster (node:net:1920:12)</p>
          <p> at Server.listen (node:net:2008:7)</p>
          <p>
            {" "}
            at ExpressAdapter.listen
            (A:\projetinhos\sistema\node_modules\@nestjs\platform-express\adapters\express-adapter.js:88:32)
          </p>
          <p>
            {" "}
            at
            A:\projetinhos\sistema\node_modules\@nestjs\core\nest-application.js:180:30
          </p>
          <p> at new Promise (anonymous)</p>
          <p>
            {" "}
            at NestApplication.listen
            (A:\projetinhos\sistema\node_modules\@nestjs\core\nest-application.js:170:16)
          </p>
          <p>
            {" "}
            at processTicksAndRejections
            (node:internal/process/task_queues:95:5)
          </p>
          <p> at bootstrap (A:\projetinhos\sistema\src\main.ts:42:3)</p>
        </Info>
      );
    }

    simularTerminal();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      const elemento = terminalRef.current;
      elemento.scrollTop = elemento.scrollHeight;
    }
  }, [saida, sucesso]);

  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={`${styles.terminalDot} ${styles.dotVermelho}`}></div>
          <div className={`${styles.terminalDot} ${styles.dotAmarelo}`}></div>
          <div className={`${styles.terminalDot} ${styles.dotVerde}`}></div>
        </div>
        <div ref={terminalRef} className={styles.terminalBody}>
          <div>
            <span className={styles.textoVerde}>$ </span>
            <span className={styles.textoAzul}>{comando}</span>
            {argumentos}
          </div>
          <div>
            <span className={styles.textoCinza}>{carregando}</span>
          </div>
          <div>{saida}</div>
          <div>{sucesso}</div>
        </div>
      </div>
    </div>
  );
}
