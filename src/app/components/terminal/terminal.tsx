import { useEffect, useState, useRef, ReactNode } from "react";
import React from "react";
import { formatISOFullTime } from "../../lib/util/time";

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
  const cor = tipo === "log" ? "text-green-400" : "text-[#ef4444]";
  const textoTipo = tipo === "log" ? "LOG" : "ERROR";
  const tempoAtual = formatISOFullTime(new Date());
  const dataAtual = new Date().toLocaleDateString();

  const possuiConteudo = React.Children.toArray(children).some((child) =>
    typeof child === "string" ? child.trim() !== "" : true
  );

  if (possuiConteudo) {
    return (
      <div>
        <span className={cor}>[Nest]</span>
        <span className={cor}> 29512 </span>
        <span className={cor}> - </span>
        <span className="text-white">{dataAtual}, </span>
        <span className="text-white">{tempoAtual}</span>
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
          <span className="text-[#fef08a]">[NestFactory] </span>‎
          <span className="text-green-400">Starting Nest application...</span>
        </Info>,
        <Info key="2" tipo="log">
          <span className="text-[#fef08a]">[InstanceLoader] </span>‎
          <span className="text-green-400">
            AppModule dependencies initialized
          </span>
          <span className="text-[#fef08a]"> +82ms</span>
        </Info>,
        <Info key="3" tipo="log">
          <span className="text-[#fef08a]">[InstanceLoader] </span>‎
          <span className="text-green-400">
            TypeOrmModule dependencies initialized
          </span>
          <span className="text-[#fef08a]"> +0ms</span>
        </Info>,
        <Info key="4" tipo="log">
          <span className="text-[#fef08a]">[InstanceLoader] </span>‎
          <span className="text-green-400">
            PassportModule dependencies initialized
          </span>
          <span className="text-[#fef08a]"> +0ms</span>
        </Info>,
        <Info key="5" tipo="log">
          <span className="text-[#fef08a]">[InstanceLoader] </span>‎
          <span className="text-green-400">
            JwtModule dependencies initialized
          </span>
          <span className="text-[#fef08a]"> +0ms</span>
        </Info>,
        <Info key="6" tipo="log">
          <span className="text-[#fef08a]">[InstanceLoader] </span>‎
          <span className="text-green-400">
            TypeOrmCoreModule dependencies initialized
          </span>
          <span className="text-[#fef08a]"> +0ms</span>
        </Info>,
        <Info key="7" tipo="log">
          <span className="text-[#fef08a]">[RouterExplorer] </span>‎
          <span className="text-green-400">
            Mapped /dados/media/:estado, GET route
          </span>
          <span className="text-[#fef08a]"> +0ms</span>
        </Info>,
        <Info key="8" tipo="log">
          <span className="text-[#fef08a]">[NestApplication] </span>‎
          <span className="text-green-400">
            Nest application successfully started
          </span>
          <span className="text-[#fef08a]"> +3ms</span>
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
          <span className="text-[#fef08a]">[NestApplication] </span>{" "}
          <span className="text-[#ef4444]">
            Error: listen EADDRINUSE: address already in use :::3000
          </span>
          <span className="text-[#fef08a]"> +2ms</span>
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
    <div className="flex justify-end items-center h-screen">
      <div className="min-w-[38rem] min-h-[25rem] max-w-xl max-h-lg rounded-lg bg-gray-800 mr-32">
        <div className="w-full bg-gray-900 rounded-t-lg flex p-2 gap-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
        </div>
        <div
          ref={terminalRef}
          className="p-4 font-mono text-xs text-white overflow-y-auto max-h-[24rem] scroll-smooth"
        >
          <div>
            <span className="text-green-400">$ </span>
            <span className="text-blue-400">{comando}</span>
            <span>{argumentos}</span>
          </div>
          <div>
            <span className="text-gray-400">{carregando}</span>
          </div>
          <div>{saida}</div>
          <div>{sucesso}</div>
        </div>
      </div>
    </div>
  );
}
