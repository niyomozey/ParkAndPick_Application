"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

require("dotenv/config");

// require("dotenv").config();
var connection = new _sequelize.default('utmjdqnc', 'utmjdqnc', 'Cnh179o_OJ0sv2cdAhjbZKJ91OoHI64f', {
  host: 'rosie.db.elephantsql.com',
  port: 5432,
  dialect: 'postgres'
});
exports.default = connection;

try {
  connection.authenticate();
  console.log("connection started successfully");
} catch (error) {
  console.log("unable to connected to database", error);
}