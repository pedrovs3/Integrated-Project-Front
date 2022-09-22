const fetchRelatorio = async (idAluno) => {
  if (idAluno == '') window.location = '../views/alunos.html'
  const url = `https://integrated-api.netlify.app/.netlify/functions/api/relatorio/${idAluno}`

  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default fetchRelatorio;