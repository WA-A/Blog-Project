import {Router} from 'express';
import * as UserController from '../User/User.Controller.js';
const router = Router();

router.get('/',UserController.GetUser);

export default router ;