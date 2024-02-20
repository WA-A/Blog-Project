import UserModel from "../../../DB/moudle/UserModule.js";
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