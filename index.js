const fs = require('fs')
const http = require('http')
fileName='sample.txt'
// fs.writeFile(`${fileName}`,"Welcome to Node js",'utf-8',(err)=>{
//     if(err)
//         console.log(err)
// })
// fs.readFile(`${fileName}`,'utf-8',(err,data)=>{
//     console.log(data)
// })
// fs.writeFileSync('sample.txt',"Welcome",'utf-8')
// let data = fs.readFileSync('sample.txt','utf-8')
// console.log(data)


let server = http.createServer((req,res)=>{
    let date = new Date()

    fs.writeFile(`${date}.txt`,`${date}`,'utf-8',(err)=>{
        if(err)
            console.log(err)
        else
        {
            fs.readFile(`${date}.txt`,'utf-8',(err,data)=>{
                res.writeHead(200,{ 'Content-Type': 'text/html' });
                res.end(data)
            })
        }
    })

    // fs.writeFileSync(`${date}.txt`,`${date}`,'utf-8')
    // let data = fs.readFileSync(`${date}.txt`,'utf-8')
    // res.writeHead(200,{ 'Content-Type': 'text/html' });
    // res.end(data)
})

server.listen(8000,()=>console.log('Server is listening port 8000'))