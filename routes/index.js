var express = require('express');
var router = express.Router();
const {dbUrl} = require('../config/dbConfig')
const mongoose = require('mongoose')
const {UserModel} = require('../schema/usersschema')
const {hashCompare,hashPassword} = require('../config/auth')
mongoose.connect(dbUrl)

router.get('/all',async(req,res)=>{
  try {
    let users = await UserModel.find()
    res.status(200).send({
      users
    })
  } catch (error) {console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})
router.get('/user/:id',async(req,res)=>{
  try {
    let users = await UserModel.findOne({_id:req.params.id},{password:0})
    res.status(200).send({
      users
    })
  } catch (error) {console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})
router.post('/login',async(req,res)=>{
  try {
    let user = await UserModel.findOne({email:req.body.email})
   if(user)
   {
      console.log(await hashCompare(req.body.password,user.password))
      if(await hashCompare(req.body.password,user.password))
      {
        res.status(200).send({message:"Login Successfull"})
      }
      else
        res.status(400).send({message:"Invalid Credentials"})
   }
   else
    res.status(400).send({message:"Email does not exists"})
  } catch (error) {console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})

router.post('/add-user',async(req,res)=>{
  try {
    let user = await UserModel.findOne({email:req.body.email})
    if(!user)
    {
        req.body.password = await hashPassword(req.body.password)
        let doc = new UserModel(req.body)
      await doc.save()
      res.status(201).send({
        message:"User created successfully"
    })
    }
    else
    {
      res.status(400).send({message:"Email Id already exists"})
    }
  } catch (error) {console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})
router.put('/edit-user/:id',async(req,res)=>{
  try {
    let user = await UserModel.findOne({_id:req.params.id})
    if(user)
    {
        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        user.email = req.body.email
        user.password = req.body.password
        await user.save()
        // let doc = await UserModel.updateOne({_id:req.params.id},{$set:req.body},{runValidators:true})
        res.status(200).send({
          message:"User Edited Successfully"
      })
    }
    else
    {
      res.status(400).send({message:"Invalid Id"})
    }
  } catch (error) {console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})
router.delete('/delete-user/:id',async(req,res)=>{
  try {
    let user = await UserModel.findOne({_id:req.params.id})
    if(user){
      let doc = await UserModel.deleteOne({_id:req.params.id})
    res.status(200).send({
      message:"User Deleted Successfully"})
    }
    else
    {
      res.status(400).send({message:"Invalid Id"})
    }
  } catch (error) {console.log(error)
    res.status(500).send({message:"Internal Server Error",error})
  }
})

module.exports = router;
