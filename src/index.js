const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./api/schema");
const { port } = require("../.env");

const app = express();
app.use(
  "/api",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
