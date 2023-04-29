/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'Murrm7yOB17g6Dey0ucp',
    database: 'railway',
    host: 'containers-us-west-36.railway.app',
    dialect: "postgres",
    port: 6790
  },
  test: {
    username: 'utmjdqnc',
    password: 'Cnh179o_OJ0sv2cdAhjbZKJ91OoHI64f',
    database: 'utmjdqnc',
    host: 'rosie.db.elephantsql.com',
    dialect: "postgres",
  },
  develop: {
    username: 'postgres',
    password: '4Y2n6dmCqPG5p2srTGL4',
    database: 'railway',
    host: 'containers-us-west-66.railway.app',
    dialect: "postgres",
    port: 5848
  },

  production: {
    use_env_variable: 'DATABASE_URL',
    url: 'postgres://utmjdqnc:Cnh179o_OJ0sv2cdAhjbZKJ91OoHI64f@rosie.db.elephantsql.com/utmjdqnc',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
};
