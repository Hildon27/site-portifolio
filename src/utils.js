export const getImageUrl = (path) => {
    const baseURL = window.location.origin;
    const caminhoRelativo = `assets/${path}`;
    const caminhoFinal = `${baseURL}/${caminhoRelativo}`;
  return caminhoFinal;
};

export const getPdfUrl = (name) => {
  const baseURL = window.location.origin;
  const caminhoRelativo = `public/pdfs/${name}`;
  const caminhoFinal = `${baseURL}/${caminhoRelativo}`;
  return caminhoFinal;
};