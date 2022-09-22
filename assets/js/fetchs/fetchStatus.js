const fetchStatus = async (curso, status, year) => {
  let url = `https://integrated-api.netlify.app/.netlify/functions/api/alunos/${curso}?status=${status}&year=${year}`

  if (year == 'Ano') url = `https://integrated-api.netlify.app/.netlify/functions/api/alunos/${curso}?status=${status}` 
  if (status == 'Status') url = `https://integrated-api.netlify.app/.netlify/functions/api/alunos/${curso}`;
  
  const response = await fetch(url)
  const data = await response.json()

  return data.alunosByStatus || data.studentsFilter || data.alunos;
}

const fetchYear = async (curso, status, year) => {
  let url = `https://integrated-api.netlify.app/.netlify/functions/api/alunos/${curso}?status=${status}&year=${year}`
  if (status == 'Status') url = `https://integrated-api.netlify.app/.netlify/functions/api/alunos/${curso}?year=${year}`;
  if (year == 'Ano') url = `https://integrated-api.netlify.app/.netlify/functions/api/alunos/${curso}?status=${status}`

  const response = await fetch(url)
  const data = await response.json()

  return data.alunosByYear || data.studentsFilter || data.alunos || data.alunosByStatus;
}

export {fetchStatus, fetchYear};