function status(req, res) {
  return res.status(200).json({
    chave: "valor1",
    chave1: "valor2",
  });
}

export default status;
