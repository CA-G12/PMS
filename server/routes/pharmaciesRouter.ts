import { Router } from 'express';
import {
  pharmacyOverview,
  editRequests,
  addRequests,
  salesHistory,
} from '../controllers';

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
pharmaciesRouter.get('/product', auth, pharmacyAuth, getAllProducts);
pharmaciesRouter.post('/pharmacy/requests', auth, pharmacyAuth, addRequests);
pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/requests',
  auth,
  pharmacyAuth,
  getPharmacyRequests
);
pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/sales',
  auth,
  pharmacyAuth,
  salesHistory
);

export default pharmaciesRouter;
