import { sequelize } from'../moudle/Connection.js';
import {  DataTypes } from'sequelize';


const UserModel = sequelize.define('User',{
    name:{
       type:DataTypes.STRING(100),
       allowNull:false
    },
    Email:{
        type:DataTypes.STRING,
        allowNull:false,
        uniqe:true
     },
     age:{
         type:DataTypes.INTEGER
     },
     Password:{
        type:DataTypes.STRING,
        allowNull:false
     },
     ConfirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
     },
    },
    {
     timestamps:true,
    }  
);



export default UserModel;