import { ConnectDB } from '../../DB/moudle/Connection.js';
import AuthRouter from './Auth/Auth.Router.js';
import BlogRouter from './Blog/Blog.Router.js';
import UserRouter from './User/User.Router.js';

export const initApp = (app,express)=>{
    ConnectDB();
    app.use(express.json());
    app.get('/',(req,res)=>{
        return res.json({message:"Welcome"}); // Main Page 
      });
    app.use('/auth',AuthRouter);
    app.use('/blog',BlogRouter);
    app.use('/user',UserRouter);
    

    app.use('*',(req,res)=>{
        return res.json({message:"Page Not Found"}); // end point not found
    });
}