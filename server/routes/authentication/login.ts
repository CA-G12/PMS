import Router from 'express';
import { login } from '../../controllers';

const loginRouter = Router();

loginRouter.post('/auth/login', login);

export default loginRouter;
