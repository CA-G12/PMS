import { Router } from 'express';
import getPharmacyRequests from '../../controllers/pharamcies';
import { auth, pharmacyAuth } from '../../middlewares';

const pharmacyRouter = Router();

pharmacyRouter.get(
  '/pharmacy/:pharmacyId/requests',
  auth,
  pharmacyAuth,
  getPharmacyRequests
);

export default pharmacyRouter;
