const fetchStatus = async (curso, status, year) => {
  let url = `http://localhost:3000/alunos/${curso}?status=${status}&year=${year}`
  if (year == 'Ano') url = `http://localhost:3000/alunos/${curso}?status=${status}` 
  if (status == 'Status') url = `http://localhost:3000/alunos/${curso}`;
  const response = await fetch(url)
  const data = await response.json()

  return data.alunosByStatus || data.studentsFilter || data.alunos;
}

const fetchYear = async (curso, status, year) => {
  let url = `http://localhost:3000/alunos/${curso}?status=${status}&year=${year}`
  if (status == 'Status') url = `http://localhost:3000/alunos/${curso}?year=${year}`;

  const response = await fetch(url)
  const data = await response.json()
  return data.alunosByYear || data.studentsFilter || data.alunos;
}

export {fetchStatus, fetchYear};