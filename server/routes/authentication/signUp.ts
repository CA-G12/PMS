import express from 'express';
import signUp from '../../controllers/authentication/signUp';

const signUpRouter = express.Router();

signUpRouter.post('/auth/signup', signUp);

export default signUpRouter;
