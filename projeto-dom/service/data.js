export const removeDatasRepetidas = (datas) => {
  const datasUnicas = [];
  console.log(datas);
  datas.forEach((data) => {
    if (datasUnicas.indexOf(data.dataFormatada) === -1) {
      datasUnicas.push(data.dataFormatada);
    }
  });
  return datasUnicas;
};

export const ordenadaDatas = (data) => {
  data.sort((a) => {
    const primeiraData = moment(a, "DD/MM/YYYY").format("YYYYDDMM");
    const segundaData = moment(a, "DD/MM/YYYY").format("YYYYDDMM");

    return primeiraData - segundaData;
  });
};
