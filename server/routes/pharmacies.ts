import { Router } from 'express';
import { salesHistory } from '../controllers';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId/sales', salesHistory);
export default pharmaciesRouter;
