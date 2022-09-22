import openNewUrl from './fetchs/fetchAlunos.js';
import {fetchStatus, fetchYear} from './fetchs/fetchStatus.js';
import criaAluno from './components/criaAluno.js';
import cleanDiv from './utils/cleanDiv.js';

const idCurso = localStorage.getItem('idCurso');
const title = document.querySelector('#curso-title');
const divPai = document.querySelector('.alunos-grid');
const status = document.querySelector('#statusSelect');
const yearFilter = document.querySelector('#yearsFilter');
const dataAlunos = await openNewUrl(idCurso);


let cursoTitle = dataAlunos[0].curso[0].nome.split('- ');
cursoTitle = cursoTitle[1];

title.textContent = cursoTitle;

const filterByStatus = async () => {
  const statusSelected = status.value;
  const year = yearFilter.value;

  const dataPorStatus = await fetchStatus(idCurso, statusSelected, year);

  cleanDiv(divPai);
  criaAluno(dataPorStatus);
};

const filterByYear = async () => {
  const ano = yearFilter.value;
  const statusSelected = status.value;

  if(statusSelected == 'Status' && ano == 'Ano') {
    cleanDiv(divPai)
    criaAluno(dataAlunos);
    return;
  }

  const dataAnoStatus = await fetchYear(idCurso, statusSelected, ano)
  cleanDiv(divPai);
  criaAluno(dataAnoStatus);
}

const viewRelatorio = async (e) => {
  const idAluno = e.target.id || e.target.parentElement.id;
  localStorage.setItem('idAluno', idAluno);
  location.href = './relatorio.html';
};

const yearsStudents = () => {
  const yearsStudents = [];

  dataAlunos.forEach((aluno) => {
    const year = aluno.curso[0].conclusao;
    if (!yearsStudents.includes(year)) yearsStudents.push(year);
  });

  return yearsStudents;
};

const anos = yearsStudents();

const insertFilterYears = (anos) => {
  anos.forEach((ano) => {
    const option = document.createElement('option');
    option.value = ano;
    option.textContent = ano;

    yearFilter.appendChild(option);
  });
};

insertFilterYears(anos);
divPai.addEventListener('click', viewRelatorio);

status.addEventListener('change', filterByStatus);
yearFilter.addEventListener('change', filterByYear)

criaAluno(dataAlunos);
