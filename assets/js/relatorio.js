import fetchRelatorio from "./fetchRelatorio.js";

const idAluno = localStorage.getItem('idAluno')
const relatorioAluno = await fetchRelatorio(idAluno);

console.log(relatorioAluno)