import { openNewUrl } from "./components/cardsHome.js";
const idCurso = localStorage.getItem('idCurso');
const title = document.querySelector('#curso-title')
const divPai = document.querySelector('.alunos-grid')
const dataAlunos = await openNewUrl(idCurso);
console.log(dataAlunos)

let cursoTitle = dataAlunos[0].curso[0].nome.split('- ')
cursoTitle = cursoTitle[1];
title.textContent = cursoTitle

const criaAluno = () => {
  console.log(dataAlunos)

  dataAlunos.forEach((aluno) => {
    const a = document.createElement('a')
    const img = document.createElement('img')
    const span = document.createElement('span')
    a.classList.add('aluno-card')

    img.src = aluno.foto
    span.classList.add('name')
    span.textContent = aluno.nome
    a.appendChild(img)
    a.appendChild(span)
    divPai.appendChild(a)
  })
  
}

criaAluno()

// console.log(await alunosData())