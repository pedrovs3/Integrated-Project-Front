const openNewUrl = async (textContent) => {
  
  const curso = textContent.toLowerCase();
  const url = `https://integrated-api.netlify.app/.netlify/functions/api/alunos/${curso}`
  const response = await fetch(url)
  const data = await response.json()
  return data.alunos
}

export default openNewUrl;