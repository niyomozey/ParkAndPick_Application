import Sequelize from "sequelize";
import "dotenv/config";
// require("dotenv").config();

var connection = new Sequelize(
  'utmjdqnc',
  'utmjdqnc',
  'Cnh179o_OJ0sv2cdAhjbZKJ91OoHI64f',
  {
    host: 'rosie.db.elephantsql.com',
    port: 5432,
    dialect: 'postgres',
  }
);
try {
  connection.authenticate();
  console.log("connection started successfully");
} catch (error) {
  console.log("unable to connected to database", error);
}

export { connection as default };
