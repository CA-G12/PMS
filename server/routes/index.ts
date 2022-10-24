import { Router } from 'express';
import adminRouter from './adminRoutes';
import authRouter from './authRoutes';

const router = Router();

router.use(authRouter);
router.use(adminRouter);

export default router;
