const montaSigla = (disciplina) => {
  const siglaArray = [];
  const nomeArray = disciplina.nome.split(' ');
  nomeArray.forEach((palavra) => {
    const primeiraLetra = palavra.substr(0, 1);
    siglaArray.push(primeiraLetra.toUpperCase());
  });
  const sigla = siglaArray.join('');
  return sigla;
};
export default montaSigla;