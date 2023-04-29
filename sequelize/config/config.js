/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  development: {
    username: 'utmjdqnc',
    password: 'Cnh179o_OJ0sv2cdAhjbZKJ91OoHI64f',
    database: 'utmjdqnc',
    host: 'rosie.db.elephantsql.com',
    dialect: "postgres",


  },
  test: {
    username: 'utmjdqnc',
    password: 'Cnh179o_OJ0sv2cdAhjbZKJ91OoHI64f',
    database: 'utmjdqnc',
    host: 'rosie.db.elephantsql.com',
    dialect: "postgres",


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
