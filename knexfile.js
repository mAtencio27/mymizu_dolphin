require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
    ssl: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
  
  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};