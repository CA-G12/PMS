import Router from 'express';
import { allRequests } from '../../controllers';
import adminAuth from '../../middlewares/adminAuth';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/admin/requests', auth, adminAuth, allRequests);

export default router;
