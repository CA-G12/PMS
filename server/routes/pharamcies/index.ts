import { Router } from 'express';
import {
  getPharmacyStatistics,
  getAllProducts,
} from '../../controllers/pharamcies';

const pharmacyRouter = Router();

pharmacyRouter.get('/pharmacy/:pharmacyId/statistics', getPharmacyStatistics);
pharmacyRouter.get('/product', getAllProducts);

export default pharmacyRouter;
