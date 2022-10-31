import { Router } from 'express';
import { pharmacyOverview } from '../controllers';
import { addSales } from '../controllers/pharamcies';
import { auth, pharmacyAuth } from '../middlewares';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.post('/pharmacy/sales', auth, pharmacyAuth, addSales);

export default pharmaciesRouter;
