'use strict';
import separateData from "../utils/cleanResponse.js";
import criaCard from "../components/cardsHome.js";

const fetchAPIFirstPage = async () => {
  const url = 'https://integrated-api.netlify.app/.netlify/functions/api/cursos';
  const response = await fetch(url);

  const data = await response.json();

  return data.cursos;
};

separateData(await fetchAPIFirstPage());

const data = await separateData(await fetchAPIFirstPage());

const divPai = document.querySelector('.cursos');

criaCard(divPai, data);

