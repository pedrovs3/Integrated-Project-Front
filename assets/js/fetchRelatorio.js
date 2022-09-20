const fetchRelatorio = async (idAluno) => {
  const url = `http://localhost:3000/relatorio/${idAluno}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default fetchRelatorio;