const mongodb = require('mongodb')
const dbName = `b38wet`
const dbUrl = `mongodb+srv://Raj2710:Raj2710@raj.x3e0h.mongodb.net/${dbName}`
const MongoClient = mongodb.MongoClient
module.exports={mongodb,dbName,dbUrl,MongoClient}