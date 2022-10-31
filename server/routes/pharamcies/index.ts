import { Router } from 'express';
import addSales from '../../controllers/pharamcies';
import { auth, pharmacyAuth } from '../../middlewares';

const pharmacyRouter = Router();

pharmacyRouter.post('/pharmacy/sales', auth, pharmacyAuth, addSales);

export default pharmacyRouter;
