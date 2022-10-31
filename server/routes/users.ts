import { Router } from 'express';
import { pharmacies } from '../controllers';

const usersRouter = Router();

usersRouter.get('/pharmacy', pharmacies);

export default usersRouter;
