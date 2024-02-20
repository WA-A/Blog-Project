import {Router} from 'express';
import * as UserController from '../User/User.Controller.js';
const router = Router();

router.put('/update/:id',UserController.Update);
export default router ;