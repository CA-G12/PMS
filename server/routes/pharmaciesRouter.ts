import { Router } from 'express';
import {
  pharmacyOverview,
  editRequests,
  addRequests,
  salesHistory,
  productsInStock,
} from '../controllers';

import {
  getPharmacyRequests,
  addSales,
  getPharmacyStatistics,
} from '../controllers/pharamcies';
import { auth, pharmacyAuth } from '../middlewares';

const pharmaciesRouter = Router();

pharmaciesRouter.get(
  '/pharmacy/productsInStock',
  auth,
  pharmacyAuth,
  productsInStock
);
pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.put('/pharmacy/requests', auth, pharmacyAuth, editRequests);
pharmaciesRouter.get('/pharmacy/:pharmacyId/statistics', getPharmacyStatistics);
pharmaciesRouter.post('/pharmacy/sales', auth, pharmacyAuth, addSales);
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
