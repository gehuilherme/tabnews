import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  return res.status(200).json({
    chave: "valor1",
    chave1: "valor2",
  });
}

export default status;
