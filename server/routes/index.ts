import { Router } from 'express';
import adminRouter from './adminRoutes';
import authRouter from './authRoutes';
import pharmacyRouter from './pharmasyRouter';

const router = Router();

router.use(authRouter);
router.use(adminRouter);
router.use(pharmacyRouter);
export default router;
