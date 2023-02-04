var express = require('express');
var router = express.Router();
const {mongodb,dbName,dbUrl,MongoClient} = require('../config/dbConfig')

router.get('/',async(req,res)=>{
  const client = new MongoClient(dbUrl)
  client.connect()
  try {
    let db = await client.db(dbName)
    let users = await db.collection('users').find().sort({name:1}).toArray()
    res.status(200).send({
      message:"Data Received Successfully",
      users
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server error",error})
  }
  finally
  {
    client.close()
  }
})

router.post('/',async(req,res)=>{
  const client = new MongoClient(dbUrl)
  client.connect()
  try {
    let db = await client.db(dbName)
    let user = await db.collection('users').findOne({email:req.body.email})
    if(!user)
    {
      let users = await db.collection('users').insertOne(req.body)
      res.status(201).send({
        message:"Data Saved Successfully",
        users
      })
    }
    else
    {
      res.status(400).send({
        message:"Email ID already exists!"
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server error",error})
  }
  finally
  {
    client.close()
  }
})

router.get('/:id',async(req,res)=>{
  const client = new MongoClient(dbUrl)
  client.connect()
  try {
    let db = await client.db(dbName)
    let user = await db.collection('users').findOne({_id: mongodb.ObjectId(req.params.id)})
    res.status(200).send({
      user
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server error",error})
  }
  finally
  {
    client.close()
  }
})

router.put('/:id',async(req,res)=>{
  const client = new MongoClient(dbUrl)
  client.connect()
  try {
    let db = await client.db(dbName)
    let users = await db.collection('users').updateOne({_id: new mongodb.ObjectId(req.params.id)},{$set:req.body})
    res.status(200).send({
      message:"Data Edited Successfully"
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server error",error})
  }
  finally
  {
    client.close()
  }
})

router.delete('/:id',async(req,res)=>{
  const client = new MongoClient(dbUrl)
  client.connect()
  try {
    let db = await client.db(dbName)
    let users = await db.collection('users').deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(200).send({
      message:"Data Deleted Successfully"
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Internal Server error",error})
  }
  finally
  {
    client.close()
  }
})


module.exports = router;
