import { Router } from 'express';
import authRouter from './auth';
import loginRouter from './login';
import logoutRouter from './logout';
import signUpRouter from './signUp';

const authenticationRouter = Router();

authenticationRouter.use(authRouter);
authenticationRouter.use(loginRouter);
authenticationRouter.use(logoutRouter);
authenticationRouter.use(signUpRouter);

export default authenticationRouter;
