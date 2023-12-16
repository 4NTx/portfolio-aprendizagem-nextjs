export const formatarDataRelativa = (data: Date): string => {
  const agora = Date.now();
  const segundosPassados = (agora - data.getTime()) / 1000;

  if (segundosPassados < 60)
    return formatarUnidadeRelativa(segundosPassados, "segundo");
  if (segundosPassados < 3600)
    return formatarUnidadeRelativa(segundosPassados / 60, "minuto");
  if (segundosPassados < 86400)
    return formatarUnidadeRelativa(segundosPassados / 3600, "hora");

  const dias = segundosPassados / 86400;
  if (dias > 7) return formatarDataISO(data);

  return formatarUnidadeRelativa(dias, "dia");
};

const formatarUnidadeRelativa = (
  quantidade: number,
  unidade: string
): string => {
  quantidade = Math.round(quantidade);
  if (quantidade !== 1) {
    return `${quantidade} ${unidade}s atrás`;
  }

  return `${quantidade} ${unidade} atrás`;
};

export const formatarDataISO = (data: Date): string => {
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");
  return `${data.getFullYear()}-${mes}-${dia}`;
};

export const formatarDataISOHora = (data: Date): string => {
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");
  const hora = String(data.getHours()).padStart(2, "0");
  const minuto = String(data.getMinutes()).padStart(2, "0");
  return `${data.getFullYear()}-${mes}-${dia} ${hora}:${minuto}`;
};

export const formatarHoraISOCompleta = (data: Date): string => {
  const hora = String(data.getHours()).padStart(2, "0");
  const minuto = String(data.getMinutes()).padStart(2, "0");
  const segundo = String(data.getSeconds()).padStart(2, "0");
  return `${hora}:${minuto}:${segundo}`;
};
