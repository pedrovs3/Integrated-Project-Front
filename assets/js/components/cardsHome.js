import separateData from "../app";
const divPai = document.querySelector('.cursos');

const criaCard = () => {

  separateData.forEach(elemento => {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    img.src = elemento.icone
    card.classList.add('curso-card');
    span.textContent = elemento.sigla

    card.appendChild(img, span)
    divPai.appendChild(card);
  });
}

export default criaCard;