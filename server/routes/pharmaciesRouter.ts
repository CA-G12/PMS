import { Router } from 'express';
import { pharmacyOverview, editRequests } from '../controllers';
import {
  getAllProducts,
  getPharmacyRequests,
  addSales,
  getPharmacyStatistics,
} from '../controllers/pharamcies';
import { auth, pharmacyAuth } from '../middlewares';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.put('/pharmacy/requests/requestId', editRequests);
pharmaciesRouter.get('/pharmacy/:pharmacyId/statistics', getPharmacyStatistics);
pharmaciesRouter.post('/pharmacy/sales', auth, pharmacyAuth, addSales);
pharmaciesRouter.get('/product', getAllProducts);
pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/requests',
  auth,
  pharmacyAuth,
  getPharmacyRequests
);
pharmaciesRouter.post('/pharmacy/requests', auth, pharmacyAuth);

export default pharmaciesRouter;
