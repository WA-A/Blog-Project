import {Router} from 'express';
import * as BlogController from '../Blog/Blog.Controller.js';
const router = Router();

router.get('/',BlogController.GetBlog);
router.post('/addblog',BlogController.AddBlog);
export default router ;