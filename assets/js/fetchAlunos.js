const openNewUrl = async (textContent) => {
  
  const curso = textContent.toLowerCase();
  const url = `http://localhost:3000/alunos/${curso}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default openNewUrl;