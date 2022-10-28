import { Router } from 'express';
import adminRouter from './adminRoutes';
import authRouter from './authRoutes';
import pharmaciesRouter from './pharamcies';

const router = Router();

router.use(pharmaciesRouter);
router.use(authRouter);
router.use(adminRouter);

export default router;
