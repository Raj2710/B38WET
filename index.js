const express = require('express')
const port = 8000
const app = express()
app.use(express.json())

let users = [
    {
        name:"Raj",
        email:"raj@gmail.com",
        batch:"B40WDE",
    },
    {
        name:"Nag",
        email:"nag@gmail.com",
        batch:"B38WET",
    },
    {
        name:"Ajeeth",
        email:"ajeeth@gmail.com",
        batch:"B40WDE",
    }
]

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Express</h1>
    <h2>Visit /users for user data</h2>
    `)
})

app.get('/users',(req,res)=>{
    res.send({
        statusCode:200,
        count:users.length,
        users
    })
})

app.get('/users/:id',(req,res)=>{
    if(req.params.id<users.length)
    {
        res.send({
            statusCode:200,
            user:users[req.params.id]
        })
    }
    else
    {
        res.send({
            statusCode:400,
            message:"Requested Id not found"
        })
    }
})

app.post('/users',(req,res)=>{
    users.push(req.body)
    res.send({
        statusCode:201,
        message:"User Added Successfully"
    })
})

app.put('/users/:id',(req,res)=>{
    if(req.params.id<users.length)
    {
        users.splice(req.params.id,1,req.body)
        res.send({
            statusCode:200,
            message:"User Updated Successfully!"
        })
    }
    else
    {
        res.send({
            statusCode:400,
            message:"Requested Id not found"
        })
    }
})

app.delete('/users/:id',(req,res)=>{
    if(req.params.id<users.length)
    {
        users.splice(req.params.id,1)
        res.send({
            statusCode:200,
            message:"User Deleted Successfully!"
        })
    }
    else
    {
        res.send({
            statusCode:400,
            message:"Requested Id not found"
        })
    }
})
app.listen(port,()=>console.log('Server listening to '+port))