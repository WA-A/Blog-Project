import {Router} from 'express';
import * as BlogController from '../Blog/Blog.Controller.js';
const router = Router();

router.get('/',BlogController.GetBlog);
export default router ;