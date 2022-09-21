const separateData = async (data) => {
  const array = new Array();
  
  data.forEach(elemento => {
    array.push({
      sigla: elemento.sigla,
      icone: elemento.icone,
    });
  });

  return array;
};

export default separateData;