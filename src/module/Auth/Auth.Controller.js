import { where } from "sequelize";
import UserModel from "../../../DB/moudle/UserModule.js";

export const GetAuth = (req,res)=>{
    return res.json({message:"Auth"});
}

export const Register = async (req,res)=>{
    try{
        const {Email,Password,name,age}= req.body;
        const InsertUser = await UserModel.create({Email,Password,name,age}); // insert to table   == email:email,password:password,name:name  // key = name so write {email,password,name}
       return res.json({message:"success",InsertUser});
    }
   catch(error){
    if(error.original?.errno == 1062){
        return res.json({message:"email already exists"});
    }
    return res.json({message:"error",error:error.stack});
   } 
  
}

export const Login = async (req,res)=>{

    const {Email,Password} = req.body;

    const CheckUser = await UserModel.findAll({
        attributes:["id","name"],
        where:{
            Email,
            Password
        }
    });

    if(!CheckUser.length){
        return res.json({message:"email or password is worng"});
    }

    return res.json({message:"success",user:CheckUser});
 }


 