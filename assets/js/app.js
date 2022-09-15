'use strict';

const fetchAPI = async () => {
  const url = 'http://localhost:3000/cursos';
  const response = await fetch(url);

  const data = await response.json();

  return data;
};

const separateData = async () => {
  const data = await fetchAPI();
  const array = new Array();

  data.forEach(elemento => {
    array.push({
      sigla: elemento.sigla,
      icone: elemento.icone,
    });
  });

  return array;
};


const divPai = document.querySelector('.cursos');

const criaCard = async () => {
  const arrayCursos = await separateData()

  arrayCursos.forEach(elemento => {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    img.src = elemento.icone
    card.classList.add('curso-card');
    span.textContent = elemento.sigla

    card.appendChild(img)
    card.appendChild(span)
    divPai.appendChild(card);
  });
}

criaCard()