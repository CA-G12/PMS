import { Router } from 'express';
import addSales from '../../controllers/pharamcies';
import { auth, pharmacyAuth } from '../../middlewares';

const pharmacyRouter = Router();

pharmacyRouter.post('/pharmacy/:pharmacyId/sales', addSales);

export default pharmacyRouter;