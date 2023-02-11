const bcrypt = require('bcryptjs')
const saltRound = 10;


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

module.exports = {hashCompare,hashPassword}