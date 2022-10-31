import { Router } from 'express';
import { salesHistory } from '../controllers';
import { auth } from '../middlewares';
import pharmacyAuth from '../middlewares/pharmacyAuth';

const pharmaciesRouter = Router();

pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/sales',
  auth,
  pharmacyAuth,
  salesHistory
);
export default pharmaciesRouter;
