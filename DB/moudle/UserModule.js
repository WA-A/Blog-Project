import { sequelize } from'../moudle/Connection.js';
import {  DataTypes } from'sequelize';
import BlogModel from './BlogModule.js';


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


UserModel.hasMany(BlogModel,{ // 1-m
   //onDelete: 'CASCADE'
   foreignKey:{
      name:'UserId',
      type:DataTypes.INTEGER,
   },
});

BlogModel.belongsTo(UserModel); //  تنتمي الى





export default UserModel;