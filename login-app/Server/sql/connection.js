const mysql = require("mysql");
require("dotenv").config();
class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
//did .env get ignored?
      this.pool = mysql.createPool({
        connectionLimit: 100,      
        host: "den1.mysql6.gear.host",
        user: "newappdatabase",
        password: "Ab6wguJ~W_71",
        database: "newappdatabase",
      });



      // host: process.env.REACT_APP_HOST,
      // user: process.env.REACT_APP_USER,
      // password: process.env.REACT_APP_PASSWORD,
      // database: process.env.REACT_APP_DATABASE,



      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
