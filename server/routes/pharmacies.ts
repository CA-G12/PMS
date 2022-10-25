import { Router } from 'express';
import { pharmacyOverview } from '../controllers';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);

export default pharmaciesRouter;
