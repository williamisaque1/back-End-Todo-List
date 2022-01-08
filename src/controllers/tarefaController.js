const { v4: uuidv4 } = require("uuid");

const tarefa = require("../database/Tarefa");

const listar = async () => {
  try {
    const dados = await tarefa.findAll({ raw: true });
    return dados.reverse();
  } catch (err) {
    throw new Error(err);
  }
};
const add = async (id, conteudo, realizada) => {
  try {
    console.log("dados enviados " + id + " " + conteudo + " " + realizada);
    const dados = await tarefa.create({
      id,
      conteudo,
      realizada,
    });
    return dados;
  } catch (err) {
    throw new Error(err);
  }
};
const modificar = () => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
const deletar = async (id) => {
  try {
    const dados = await tarefa.destroy({
      where: {
        id: id,
      },
    });
    return dados;
  } catch (err) {
    throw new Error(err);
  }
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
module.exports = {
  add,
  modificar,
  deletar,
  listar,
};
