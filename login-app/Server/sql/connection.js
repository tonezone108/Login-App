const mysql = require("mysql");
require("dotenv").config();
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "den1.mysql6.gear.host",
        user: "newappdatabase",
        password: "Ab6wguJ~W_71",
        database: "newappdatabase",
      });


      // host: process.env.DB_HOST,
      // user: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DEFAULT_DB,




      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
