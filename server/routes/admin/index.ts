import { Router } from 'express';
import router from './allPharmacies';

const adminRouter = Router();

adminRouter.use(router);

export default adminRouter;
