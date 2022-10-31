import { Router } from 'express';
import { pharmacyOverview } from '../controllers';
import { getAllProducts, getPharmacyRequests, addSales } from '../controllers/pharamcies';
import { auth, pharmacyAuth } from '../middlewares';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.post('/pharmacy/sales', auth, pharmacyAuth, addSales);
pharmaciesRouter.get('/product', getAllProducts);
pharmaciesRouter.get(
  '/pharmacy/:pharmacyId/requests',
  auth,
  pharmacyAuth,
  getPharmacyRequests
);

export default pharmaciesRouter;
