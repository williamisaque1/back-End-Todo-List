const { DataTypes } = require("sequelize");
const conectar = require("../database/database");
const tarefa = conectar.define(
  "tarefa",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    realizada: { type: DataTypes.BOOLEAN },
  },
  {
    timestamps: false,
  }
);
 tarefa.sync({ force: false }).then(()=>{}).catch((err)=>{
     console.log(err)
 })
module.exports = tarefa;
