const app = require("../app");

app.listen(process.env.PORT || 3333, () =>
  console.log("iniciado na porta 3333")
);
