import openNewUrl from './fetchAlunos.js';
import {fetchStatus, fetchYear} from './fetchStatus.js';

const idCurso = localStorage.getItem('idCurso');
const title = document.querySelector('#curso-title');
const divPai = document.querySelector('.alunos-grid');
const status = document.querySelector('#statusSelect');
const yearFilter = document.querySelector('#yearsFilter');
const dataAlunos = await openNewUrl(idCurso);
const data = new Date();
const anoAtual = data.getFullYear();

let cursoTitle = dataAlunos[0].curso[0].nome.split('- ');
cursoTitle = cursoTitle[1];

title.textContent = cursoTitle;

const filterByStatus = async () => {
  const statusSelected = status.value;
  const year = yearFilter.value;

  const dataPorStatus = await fetchStatus(idCurso, statusSelected, year);

  cleanDiv();
  criaAluno(dataPorStatus);
};

const filterByYear = async () => {
  const ano = yearFilter.value;
  const statusSelected = status.value;
  if (ano !== 'Ano') {
    const dataAnoStatus = await fetchYear(idCurso, statusSelected, ano)
    cleanDiv()
    criaAluno(dataAnoStatus);
  }
}

const criaAluno = (data) => {
  data.forEach((aluno) => {
    const a = document.createElement('a');
    const img = document.createElement('img');
    const span = document.createElement('span');
    a.classList.add('aluno-card');

    if (aluno.curso[0].conclusao < anoAtual || aluno.status == 'Finalizado') {
      a.classList.add('formado');
    } else {
      a.classList.add('cursando');
    }

    a.setAttribute('id', aluno.matricula);

    img.src = aluno.foto;
    span.classList.add('name');
    span.textContent = aluno.nome;
    a.appendChild(img);
    a.appendChild(span);
    divPai.appendChild(a);
  });
};

const cleanDiv = () => {
  divPai.innerHTML = '';
};

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
