import BlogModel from "../../../DB/moudle/BlogModule.js";


export const GetBlog = (req,res)=>{
    return res.json({message:"Blog"});
}

export const AddBlog = async (req,res)=>{
    try{

     const {title,body,UserId} = req.body;
     const blog = await BlogModel.create({title,body,UserId});
     return res.json({message:'success',blog});
    }
    catch(error){
        return res.json({message:"error",error:error.stack});
       } 
}
