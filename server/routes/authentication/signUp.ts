import express from 'express';
import signUp from '../../controllers/authentication/signUp';

const authRouter = express.Router();

authRouter.post('/auth/signup', signUp);

export default authRouter;