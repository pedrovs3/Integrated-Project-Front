import fetchRelatorio from './fetchRelatorio.js';

const idAluno = localStorage.getItem('idAluno');
const relatorioAluno = await fetchRelatorio(idAluno);
const divPai = document.querySelector('.flex-container-main');
const divStatus = document.querySelector('.stats-container');
const disciplinas = relatorioAluno.curso[0].disciplinas;

const insertStudent = () => {
  const divPerson = document.createElement('div');
  divPerson.classList.add('person');
  const photoStudent = document.createElement('img');
  photoStudent.classList.add('student-photo');
  photoStudent.src = relatorioAluno.foto;
  const spanNameStudent = document.createElement('span');
  spanNameStudent.classList.add('name-student');
  spanNameStudent.textContent = relatorioAluno.nome;

  divPerson.appendChild(photoStudent);
  divPerson.appendChild(spanNameStudent);

  divPai.prepend(divPerson);
};

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

const insertStatus = () => {
  const ul = document.createElement('ul');
  ul.classList.add('notas-container');

  disciplinas.forEach((disciplina) => {
    const li = document.createElement('li');
    li.classList.add('nota');

    const spanNumero = document.createElement('span');
    const spanNome = document.createElement('span');

    spanNumero.classList.add('nota-num');
    spanNome.classList.add('disciplina-nome');

    const notaRange = document.createElement('progress');
    notaRange.classList.add('nota-range');

    spanNumero.textContent = disciplina.media;
    spanNome.textContent = montaSigla(disciplina);

    if(disciplina.media <= 30) {
      spanNome.style.setProperty('color', 'var(--red-color)')
      spanNumero.style.setProperty('color', 'var(--red-color)')
      notaRange.classList.add('reprovado')
    }
    else if (disciplina.media <= 50) {
      spanNome.style.setProperty('color', 'var(--cursando-color)')
      spanNumero.style.setProperty('color', 'var(--cursando-color)')
      notaRange.classList.add('exame')
    }

    notaRange.setAttribute('value', disciplina.media);
    notaRange.setAttribute('min', 0)
    notaRange.setAttribute('max', 100)

    li.appendChild(spanNumero);
    li.appendChild(notaRange);
    li.appendChild(spanNome);
    ul.appendChild(li);

  });

  divStatus.appendChild(ul);
};

insertStudent();
insertStatus();
