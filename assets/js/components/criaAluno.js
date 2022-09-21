const data = new Date();
const anoAtual = data.getFullYear();
const divPai = document.querySelector('.alunos-grid');

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

    img.setAttribute('src', aluno.foto) // Teste de atribuiçao do src para funcionar no github 
    span.classList.add('name');
    span.textContent = aluno.nome.toLowerCase();
    
    a.appendChild(img);
    a.appendChild(span);
    divPai.appendChild(a);
  });
};

export default criaAluno;