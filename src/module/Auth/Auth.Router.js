import {Router} from 'express';
import * as AuthController from '../Auth/Auth.Controller.js';
const router = Router();

router.get('/',AuthController.GetAuth);

export default router;