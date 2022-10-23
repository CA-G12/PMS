import Router from 'express';
import { requestStatus } from '../../controllers';

const requestStatusRouter = Router();

requestStatusRouter.put('/admin/requests/:requestId', requestStatus);

export default requestStatusRouter;
