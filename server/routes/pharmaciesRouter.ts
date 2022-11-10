import { Router } from 'express';
import {
  pharmacyOverview,
  editRequests,
  addRequests,
  salesHistory,
  productsInStock,
  getAllProducts,
  getProducts,
} from '../controllers';
import {
  getPharmacyRequests,
  addSales,
  getPharmacyStatistics,
  oneProductId,
} from '../controllers/pharamcies';
import { auth, pharmacyAuth } from '../middlewares';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/products', getAllProducts);

pharmaciesRouter.get(
  '/pharmacy/productsInStock',
  auth,
  pharmacyAuth,
  productsInStock
);
pharmaciesRouter.post('/pharmacy/sales', auth, pharmacyAuth, addSales);
pharmaciesRouter.post('/pharmacy/requests', auth, pharmacyAuth, addRequests);
pharmaciesRouter.put('/pharmacy/requests', auth, pharmacyAuth, editRequests);

pharmaciesRouter.get('/pharmacy/:pharmacyId/overview', pharmacyOverview);
pharmaciesRouter.get('/pharmacy/:pharmacyId/overview', pharmacyOverview);
pharmaciesRouter.get('/products/requests', getProducts);
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

export default pharmaciesRouter;
