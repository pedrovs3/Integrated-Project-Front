let separate = [];

const criaCard = (divPai, separateData) => {
  separate = separateData
  separateData.forEach(elemento => {
    const card = document.createElement('a');
    const img = document.createElement('img');
    const span = document.createElement('span');

    img.src = elemento.icone
    card.classList.add('curso-card');
    span.textContent = elemento.sigla

    card.appendChild(img)
    card.appendChild(span)
    divPai.appendChild(card);

    divPai.addEventListener('click', handler)
  });
}

const handler = (e) => {
  const array = separate
  const siglas = array.map((elementos) => elementos.sigla);
  if (siglas.includes(e.target.textContent || e.target.parentElement.textContent)) {
    const textContent = e.target.textContent || e.target.parentElement.textContent;
    localStorage.setItem('idCurso', textContent)
    openNewUrl(textContent)
    location.href = '/assets/views/alunos.html'  
  }
}

const openNewUrl = async (textContent) => {
  
  const curso = textContent.toLowerCase();
  const url = `http://localhost:3000/alunos/${curso}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default criaCard;
export { openNewUrl };