require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.uri ;

let db = null;
const client = new MongoClient(uri)

module.exports.connect = () => {
    client.connect((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('database connected');
            db = data.db(dbname)
        }
    })
}

module.exports.get = () => {
    return db;
}