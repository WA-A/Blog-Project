import { Sequelize } from'sequelize';

export const sequelize = new Sequelize('freedb_Blog System', 'freedb_Wasan', '6dJu!ADc*xe698F', {
    host: 'sql.freedb.tech',
    port:3306,
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