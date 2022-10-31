import { Router } from 'express';
import { pharmacyOverview, editRequests } from '../controllers';

const pharmaciesRouter = Router();

pharmaciesRouter.get('/pharmacy/:pharmacyId', pharmacyOverview);
pharmaciesRouter.put('/pharmacy/requests/requestId', editRequests);
export default pharmaciesRouter;
