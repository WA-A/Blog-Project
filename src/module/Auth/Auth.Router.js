import {Router} from 'express';
import * as AuthController from '../Auth/Auth.Controller.js';
const router = Router();

router.get('/',AuthController.GetAuth);
router.post('/register',AuthController.Register);

export default router;