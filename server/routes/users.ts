import { Router } from 'express';
import { pharmacies, getAllProducts } from '../controllers';

const usersRouter = Router();

usersRouter.get('/pharmacy', pharmacies);
usersRouter.get('/product', getAllProducts);

export default usersRouter;
