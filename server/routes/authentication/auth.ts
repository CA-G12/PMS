import express from 'express';
import { checkAuthData } from '../../controllers/authentication';
import { auth } from '../../middlewares';

const authRouter: any = express.Router();

authRouter.get('/auth', auth, checkAuthData);

export default authRouter;
