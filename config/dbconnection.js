// Load Congfig
require('dotenv').config()

const MongoClient = require('mongodb').MongoClient;
const dbname = process.env.DB_NAME
const uri = process.env.DB_CONNECTION_STRING ;
const client = new MongoClient(uri)
let db = null;

module.exports.connect = () => {
    client.connect((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('*database connected');
            db = data.db(dbname)
        }
    })
}

module.exports.get = () => {
    return db;
}