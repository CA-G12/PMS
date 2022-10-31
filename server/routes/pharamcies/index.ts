import { Router } from 'express';
import { getPharmacyStatistics } from '../../controllers/pharamcies';

const pharmacyRouter = Router();

pharmacyRouter.get('/pharmacy/:pharmacyId/statistics', getPharmacyStatistics);

export default pharmacyRouter;
