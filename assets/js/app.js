'use strict';

import criaCard from "./components/cardsHome.js";

const fetchAPIFirstPage = async () => {
  const url = 'http://localhost:3000/cursos';
  const response = await fetch(url);

  const data = await response.json();

  return data;
};

const separateData = async () => {
  const data = await fetchAPIFirstPage();
  const array = new Array();

  data.forEach(elemento => {
    array.push({
      sigla: elemento.sigla,
      icone: elemento.icone,
    });
  });

  return array;
};

const data = await separateData();

const divPai = document.querySelector('.cursos');

criaCard(divPai, data);

// const criaCard = async () => {
//   const arrayCursos = await separateData()

//   arrayCursos.forEach(elemento => {
//     const card = document.createElement('div');
//     const img = document.createElement('img');
//     const span = document.createElement('span');
//     img.src = elemento.icone
//     card.classList.add('curso-card');
//     span.textContent = elemento.sigla

//     card.appendChild(img)
//     card.appendChild(span)
//     divPai.appendChild(card);
//     document.addEventListener('click', handler)
//   });

  
// };


// criaCard()

export default separateData

