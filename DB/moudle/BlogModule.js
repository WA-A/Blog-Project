import { sequelize } from'../moudle/Connection.js';
import {  DataTypes } from'sequelize';


const BlogModel = sequelize.define('Blog',{
    title:{
       type:DataTypes.STRING(100),
       allowNull:false,
       uniqe:true
    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false,  
     },
     
    },
    {
     timestamps:true,
    }  
);



export default BlogModel;