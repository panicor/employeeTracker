const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
host : "local host",
user:"root",
password: "December25222!",
database: "employee"
})

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;