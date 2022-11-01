import { Router } from 'express';
import { productsInStock } from '../controllers';
import { auth } from '../middlewares';
import pharmacyAuth from '../middlewares/pharmacyAuth';

const pharmaciesRouter = Router();

pharmaciesRouter.get(
  '/pharmacy/productsInStock',
  auth,
  pharmacyAuth,
  productsInStock
);

export default pharmaciesRouter;
