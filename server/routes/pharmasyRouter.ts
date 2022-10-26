import { Router } from 'express';
import { oneProductId } from '../controllers';

const pharmacyRouter = Router();

pharmacyRouter.get('/product/:productId', oneProductId);

export default pharmacyRouter;
