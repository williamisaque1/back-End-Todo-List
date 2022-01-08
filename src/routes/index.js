const express = require("express");
const router = express.Router();

const tarefaRouter = require("./tarefa.routes");
router.use("/", tarefaRouter);
/*
router.get("/", controller.listar);
router.post("/", controller.add);
router.put("/:id", controller.modificar);
router.delete("/:id", controller.deletar);
*/
module.exports = router;
