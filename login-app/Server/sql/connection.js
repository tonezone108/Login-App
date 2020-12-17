const mysql = require("mysql");
require("dotenv").config();
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "34.66.38.33",
        user: "root",
        password: process.env.MY_PASSWORD,
        database: "Admin"
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
