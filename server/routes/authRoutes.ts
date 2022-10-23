import { Router } from 'express';
import {
  login, signUp, logout, checkAuthData,
} from '../controllers';
import { auth } from '../middlewares';

const authRouter = Router();

authRouter.post('/auth/signup', signUp);
authRouter.post('/auth/login', login);
authRouter.get('/auth', auth, checkAuthData);
authRouter.get('/logout', logout);

export default authRouter;
