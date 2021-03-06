const { Sequelize } = require("sequelize");
require("dotenv").config();
const conectar = new Sequelize(
  `${process.env.DB_DATA_BASE}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASS}`,
  {
    host: `${process.env.DB_HOST}`,
    dialect: "postgres",

    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);
module.exports = conectar;
