const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const {DB_UserName, DB_Password, DB_Name, DB_Host, DB_Dialect}=process.env;
module.exports = {

  development: {
    username: DB_UserName,
    password: DB_Password,
    database: DB_Name,
    host: DB_Host,
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: "null",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "null",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
