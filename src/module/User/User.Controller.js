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