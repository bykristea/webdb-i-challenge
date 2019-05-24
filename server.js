const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();
// your code here
// const { accounts } = db;

server.use(express.json());



server.get('/accounts', async (req, res) => {
    try {
        (req.query)
       await db.find(accounts);
        res.status(200).json(db);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving accounts",
        });
    }
});


module.exports = server;