const handleNome = (nome) => {
  if (nome.includes("-")) {
    return nome.replace("-", " ");
  }
  return nome;
};

export { handleNome };
