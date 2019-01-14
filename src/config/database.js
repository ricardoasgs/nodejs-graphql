const knexfile = require("../knexfile");
const knex = require("knex")(knexfile);

// knex("users")
//   .insert({
//     name: "Teste",
//     email: "teste@teste.com.br",
//     password: "teste"
//   })
//   .then(data => console.log(data));

knex("users")
  .select("*")
  .then(data => console.log(data));

module.exports = knex;
