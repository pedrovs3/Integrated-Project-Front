import openNewUrl from "./fetchAlunos.js";
import fetchStatus from "./fetchStatus.js";
import fetchRelatorio from "./fetchRelatorio.js";

const idCurso = localStorage.getItem('idCurso');
const title = document.querySelector('#curso-title');
const divPai = document.querySelector('.alunos-grid');
const status = document.querySelector('#statusSelect')
const dataAlunos = await openNewUrl(idCurso);
const data = new Date()
const anoAtual = data.getFullYear();

let cursoTitle = dataAlunos[0].curso[0].nome.split('- ');
cursoTitle = cursoTitle[1];

title.textContent = cursoTitle;

const filterByStatus = async () => {
  const statusSelected = status.value;
  const dataPorStatus = await fetchStatus(idCurso ,statusSelected);
  
  cleanDiv()
  criaAluno(dataPorStatus)
}

const criaAluno = (data) => {

  data.forEach((aluno) => {
    const a = document.createElement('a');
    const img = document.createElement('img');
    const span = document.createElement('span');
    a.classList.add('aluno-card');
    
    if (aluno.curso[0].conclusao < anoAtual || aluno.status == 'Finalizado') {
      a.classList.add('formado')
    } else {
      a.classList.add('cursando')
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
  divPai.innerHTML = ''
}

const viewRelatorio = async(e) => {
  const idAluno = e.target.id || e.target.parentElement.id;
  localStorage.setItem('idAluno', idAluno);
  location.href = '/assets/views/relatorio.html'
}

divPai.addEventListener('click', viewRelatorio)
status.addEventListener('change', filterByStatus)
criaAluno(dataAlunos);
