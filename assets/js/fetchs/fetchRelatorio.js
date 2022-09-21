const fetchRelatorio = async (idAluno) => {
  if (idAluno == '') window.location = '../views/alunos.html'
  const url = `http://localhost:3000/relatorio/${idAluno}`

  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default fetchRelatorio;