const handleNome = (nome) => {
  if (nome.includes("-")) {
    return nome.replace(/-/gi, " ");
  }
  return nome;
};

export { handleNome };
