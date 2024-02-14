import { ConnectDB } from '../../DB/Connection.js';
import AuthRouter from './Auth/Auth.Router.js';
import BlogRouter from './Blog/Blog.Router.js';
import UserRouter from './User/User.Router.js';

export const initApp = (app)=>{
    ConnectDB();
    app.use('/auth',AuthRouter);
    app.use('/blog',BlogRouter);
    app.use('/user',UserRouter);
    
}