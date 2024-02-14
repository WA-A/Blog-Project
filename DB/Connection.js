import { Sequelize } from'sequelize';

const sequelize = new Sequelize('Blog-Project', 'root', '', {
    host: 'localhost',
    dialect:'mysql'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export const ConnectDB = async()=>{
    try{
        return await sequelize.sync();
    }
    catch(error){
console.log("error to connect to database");
    }
  }