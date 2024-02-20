import { Sequelize } from'sequelize';

export const sequelize = new Sequelize('Blog-Project', 'root', '', {
    host: 'localhost',
    dialect:'mysql'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export const ConnectDB = async()=>{
    try{
        return await sequelize.sync({alter:true, force:false}); // change for table
   // force is make table empty
      }
    catch(error){
       console.log("error to connect to database");
    }
  }