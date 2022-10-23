import { Router } from 'express';
import requestStatusRouter from './requestStatus';

const adminRouter = Router();

adminRouter.use(requestStatusRouter);

export default adminRouter;
