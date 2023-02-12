const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRound = 10;
const secretKey = 'Qw3$er5ty6&7Uio8*9P'

const hashPassword = async (password)=>{
    let salt = await bcrypt.genSalt(saltRound)
    console.log(salt)
    let hash = await bcrypt.hash(password,salt)
    console.log(hash)
    return hash
}

const hashCompare = (password, hash)=>{
    return bcrypt.compare(password,hash)
}

const createToken = ({firstName,lastName, email, role})=>{
    let token = jwt.sign({firstName,lastName, email, role},secretKey,{expiresIn:'1m'})
    return token
}

const decodeToken = (token)=>{
    let data = jwt.decode(token)
    return data
}

const validate = async (req,res,next)=>{
    try {
        if(req.headers.authorization)
        {
            let token = req.headers.authorization.split(" ")[1]
            let data = decodeToken(token)
            if((Math.floor(Date.now()/1000))<=data.exp)
                next()
            else
                res.status(401).send({message:"Token Expired"})
        }
        else
        {
            res.status(401).send({message:"Token Not Found"})
        }
    } catch (error) {
        res.status(500).send({message:"Internal Server Error",error})
    }
}

const roleAdmin = async(req,res,next)=>{
    try {
        if(req.headers.authorization)
        {
            let token = req.headers.authorization.split(" ")[1]
            let data = decodeToken(token)
            if(data.role === 'admin')
                next()
            else
                res.status(401).send({message:"Only Admin can access"})
        }
        else
        {
            res.status(401).send({message:"Token Not Found"})
        }
    } catch (error) {
        res.status(500).send({message:"Internal Server Error",error})
    }

}


module.exports = {hashCompare,hashPassword,createToken,decodeToken,validate,roleAdmin}