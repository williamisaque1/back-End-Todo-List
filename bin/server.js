const app = require("../app");

app.listen(process.env.PORT || 3333, () => {
  console.log(
    ` database ${process.env.DB_DATA_BASE} `,
    `user ${process.env.DB_USER}`,
    `senha ${process.env.DB_PASS}`,
    `hosts ${process.env.DB_HOST}`
  );
});
