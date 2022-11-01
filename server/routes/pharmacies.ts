import { Router } from 'express';
import { addRequests } from '../controllers';
import { auth } from '../middlewares';
import pharmacyAuth from '../middlewares/pharmacyAuth';

const pharmaciesRouter = Router();

pharmaciesRouter.post('/pharmacy/requests', auth, pharmacyAuth, addRequests);

export default pharmaciesRouter;
