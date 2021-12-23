// const { userLogin,UserRegister } = require('../../models/auth/index')
// const { userEmailCheck } = require('../../utils')
const User = require('../../models/auth/User')

async function getAllUser(req,res){
    const resu = await User.findAll({
        limit: 1,
        order: [['id','DESC']]
    })
    console.log(resu)
    const data = await User.findAll()
    res.status(200).json({msg:"success",data: data})
 }
async function checkUserLogin(req,res){
    try{
        const { email, password } = req.body
        const result = await User.findOne({where:{email: email, password: password}})
        if(result.length === 1){
            res.status(200).json({msg:"success",data:result})
        }else{
            res.status(404).json({msg:"user is not present"})
        }
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

async function newUserRegister(req,res){
    try{
        const { name,email,address,description,password } = req.body
        const user = await User.findOne({where:{email:email}})
        if(user.length == 0){
            const result = await User.create({name:name,email:email,address:address,description:description,password:password})
            res.status(200).json({msg:"success"})
        }else{
            res.status(201).json({msg:"email is already exist"})
        }
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}



module.exports = {
    checkUserLogin,
    newUserRegister,
    getAllUser
}

