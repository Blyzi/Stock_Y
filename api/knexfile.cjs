require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      port: process.env.PG_PORT,
      database: "stocky",
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
      extension: "cjs",
    },
    seeds: {
      directory: "./seeds",
      extension: "cjs",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
