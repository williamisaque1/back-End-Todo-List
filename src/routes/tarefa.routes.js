const { Router } = require("express");
const personController = require("../controllers/tarefaController.js");

const contato = Router();

contato.get("/", async (request, response) => {
  try {
    const items = await personController.listar();
    return response.json(items);
  } catch (err) {
    console.log("errrooo", err);
    response.status(404);
  }
});
contato.post("/", async (request, response) => {
  try {
    const { id, conteudo, realizada } = request.body;

    const items = await personController.add(id, conteudo, realizada);
    return response.status(201).json(items);
  } catch (err) {
    console.log("errrooo", err);
    response.status(400);
  }
});
contato.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    console.log("id--", id);
    const items = await personController.deletar(id);
    console.log("retorno ", items);
    return response.json(items);
  } catch (err) {
    console.log("errrooo", err);
    response.status(400);
  }
});
module.exports = contato;
