const insertStudent = (divToAppend, relatorioAluno) => {
  const divPerson = document.createElement('div');
  divPerson.classList.add('person');

  const photoStudent = document.createElement('img');
  photoStudent.classList.add('student-photo');
  photoStudent.src = relatorioAluno.foto;

  const spanNameStudent = document.createElement('span');
  spanNameStudent.classList.add('name-student');
  spanNameStudent.textContent = relatorioAluno.nome;

  divPerson.appendChild(photoStudent);
  divPerson.appendChild(spanNameStudent);

  divToAppend.prepend(divPerson);
};

export default insertStudent