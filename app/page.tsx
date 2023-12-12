"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Carregamento from './components/carregamento';

const Inicio: React.FC = () => {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // solicitação à API
    setTimeout(() => {
      setCarregando(false);
    }, 5000); // tempo simulado
  }, []);

  return (
    <div>
      <Head>
        <title>Artur - Portifólio</title>
      </Head>
      {carregando ? (
        <Carregamento carregando={carregando} />
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-3xl">Bem-vindo à minha página</h1>
        </div>
      )}
    </div>
  );
};

export default Inicio;