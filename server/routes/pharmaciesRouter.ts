import { Router } from 'express';
import {
  pharmacyOverview,
  editRequests,
  addRequests,
  salesHistory,
  productsInStock,
} from '../controllers';
import {
  getAllProducts,
  getPharmacyRequests,
  addSales,
  getPharmacyStatistics,
  oneProductId,
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
pharmaciesRouter.get('/pharmacy/:pharmacyId/statistics', getPharmacyStatistics);
pharmaciesRouter.get('/product', getAllProducts);
pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/requests',
  auth,
  pharmacyAuth,
  getPharmacyRequests
);
pharmaciesRouter.get('/product/:productId', oneProductId);
pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/sales',
  auth,
  pharmacyAuth,
  salesHistory
);

pharmaciesRouter.put('/pharmacy/requests', auth, pharmacyAuth, editRequests);

pharmaciesRouter.post('/pharmacy/sales', auth, pharmacyAuth, addSales);
pharmaciesRouter.post('/pharmacy/requests', auth, pharmacyAuth, addRequests);

export default pharmaciesRouter;
