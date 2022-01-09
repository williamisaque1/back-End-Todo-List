const app = require("../app");

app.listen(process.env.PORT || 3333, () => {
  console.log("iniciado na porta 3333");
  console.log(
    `${process.env.DB_DATA_BASE}`,
    `${process.env.DB_USER}`,
    `${process.env.DB_PASS}`,
    `${process.env.DB_HOST}`
  );
});
