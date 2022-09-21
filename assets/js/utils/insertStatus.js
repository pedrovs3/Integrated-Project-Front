import montaSigla from './montaSigla.js';

const insertStatus = (disciplinas, divToAppend) => {
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

    setTimeout(() => notaRange.setAttribute('value', disciplina.media), 10)
    notaRange.setAttribute('min', 0)
    notaRange.setAttribute('max', 100)

    li.appendChild(spanNumero);
    li.appendChild(notaRange);
    li.appendChild(spanNome);
    ul.appendChild(li);

  });

  divToAppend.appendChild(ul);
};

export default insertStatus;