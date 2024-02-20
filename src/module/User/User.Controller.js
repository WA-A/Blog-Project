import BlogModel from "../../../DB/moudle/BlogModule.js";
import UserModel from "../../../DB/moudle/UserModule.js";
import {Op} from "sequelize"

export const GetUsers = async (req,res)=>{
    try{
        const users = await UserModel.findAll({
            include:BlogModel,
            where:{
                age:{
                    [Op.gte]:25, // gretar than >=
                }
            }
        }); // == SELECT * FROM testing

        return res.json({message:"success",users});
    }
    catch(error){
        return res.json({message:"error",error:error.stack});
    }
     
    }

export const Update = async (req,res)=>{
    try{
    const {id} = req.params;
    const {name} = req.body;

    const user = await UserModel.update({name},{where:{id}});

        if(!user){
            return res.json({message:"user not found"});
        }
    
        return res.json({message:"success",users:user});
    }
    catch(error){
        return res.json({message:"error",error:error.stack});
    } 
 }

 export const Destroy = async (req,res)=>{
    const {id} = req.params;
    const user = await UserModel.destroy({
        where:{
            id
        }
    });

    if(!user){
        return res.json({message:"user not found"});
    }

    return res.json({message:"success",user});
 }