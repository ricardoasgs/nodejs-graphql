// Update with your config settings.

const { database, user, password } = require("../.env");

module.exports = {
  client: "mysql",
  connection: {
    database,
    user,
    password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
