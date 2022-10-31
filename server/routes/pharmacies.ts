import { Router } from 'express';
import { pharmacyOverview } from '../controllers';
import { getPharmacyRequests } from '../controllers/pharamcies';
import { auth, pharmacyAuth } from '../middlewares';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/requests',
  auth,
  pharmacyAuth,
  getPharmacyRequests
);
export default pharmaciesRouter;
