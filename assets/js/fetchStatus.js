const fetchStatus = async (curso, status) => {
  let url = `http://localhost:3000/alunos/${curso}?status=${status}`
  if (status == 'Status') url = `http://localhost:3000/alunos/${curso}`;
  const response = await fetch(url)
  const data = await response.json()

  return data;
}

export default fetchStatus;