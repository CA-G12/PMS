import { Router } from 'express';
import adminRouter from './adminRoutes';
import authRouter from './authRoutes';
import usersRouter from './users';

const router = Router();

router.use(authRouter);
router.use(adminRouter);
router.use(usersRouter);

export default router;
