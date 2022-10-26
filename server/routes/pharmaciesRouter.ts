import { Router } from 'express';
import { editRequests } from '../controllers';

const pharmaciesRouter = Router();

pharmaciesRouter.put('/pharmacy/requests/:requestId', editRequests);

export default pharmaciesRouter;
