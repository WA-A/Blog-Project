import {Router} from 'express';
import * as AuthController from '../Auth/Auth.Controller.js';
const router = Router();

router.get('/',AuthController.GetAuth);
router.post('/register',AuthController.Register);
router.post('/login',AuthController.Login);
export default router;