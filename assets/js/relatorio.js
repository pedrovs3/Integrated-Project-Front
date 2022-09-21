import fetchRelatorio from './fetchs/fetchRelatorio.js';

import insertStudent from './utils/insertStudent.js';
import insertStatus from './utils/insertStatus.js';

const idAluno = localStorage.getItem('idAluno');
const relatorioAluno = await fetchRelatorio(idAluno);
const divPai = document.querySelector('.flex-container-main');
const divStatus = document.querySelector('.stats-container');
const disciplinas = relatorioAluno.curso[0].disciplinas;



insertStudent(divPai, relatorioAluno);
insertStatus(disciplinas, divStatus);
