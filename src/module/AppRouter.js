import AuthRouter from './Auth/Auth.Router.js';
import BlogRouter from './Blog/Blog.Router.js';
import UserRouter from './User/User.Router.js';

export const initApp = (app)=>{
    app.use('/auth',AuthRouter);
    app.use('/blog',BlogRouter);
    app.use('/user',UserRouter);
    
}