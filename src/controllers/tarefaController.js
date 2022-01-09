const { v4: uuidv4 } = require("uuid");

const tarefa = require("../database/Tarefa");

const listar = async () => {
  try {
    const dados = await tarefa.findAll({
      raw: true,
      order: [["createdAt", "DESC"]],
    });
    // console.log(dados);
    return dados;
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
const modificar = async (id, realizada) => {
  try {
    const { conteudo } = await tarefa.findOne({
      raw: true,
      where: { id: id },
    });

    const dados = await tarefa.update(
      {
        id,
        conteudo,
        realizada,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return dados;
  } catch (err) {
    throw new Error(err);
  }
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
};
module.exports = {
  add,
  modificar,
  deletar,
  listar,
};
