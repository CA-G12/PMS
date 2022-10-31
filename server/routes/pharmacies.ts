import { Router } from 'express';
import { pharmacyOverview } from '../controllers';
import { getPharmacyStatistics } from '../controllers/pharamcies';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.get('/pharmacy/:pharmacyId/statistics', getPharmacyStatistics);

export default pharmaciesRouter;
