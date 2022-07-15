const { Pool, Client } = require("pg");
const userQuery = require('../models/user.model');
const dbConfig = require('../config/db.config');

//Connect with a pool
module.exports.getAllUser = async (req, res) => {
    const pool = new Pool(dbConfig);
    const data = await pool.query(userQuery.getAllUser());
    await pool.end();
    res.send(data.rows)
}

// // Connect with a client.
// module.exports.getAllUser = async (req, res) => {
//     const client = new Client(dbConfig);
//     await client.connect();
//     const data = await client.query(userQuery.getAllUser());
//     await client.end();
//     res.send(data.rows);
// }