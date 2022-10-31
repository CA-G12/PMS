import { Router } from 'express';
import { pharmacyOverview } from '../controllers';
import { getAllProducts } from '../controllers/pharamcies';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.get('/product', getAllProducts);
export default pharmaciesRouter;
