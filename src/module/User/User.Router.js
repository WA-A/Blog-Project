import {Router} from 'express';
import * as UserController from '../User/User.Controller.js';
const router = Router();

router.get('/getuser',UserController.GetUsers);
router.put('/update/:id',UserController.Update);
router.delete('/delete/:id',UserController.Destroy);
export default router ;