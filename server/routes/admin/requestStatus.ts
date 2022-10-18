import Router from 'express';
import { requestStatus } from '../../controllers';

const router = Router();

router.put('/admin/requests/:requestId', requestStatus);

export default router;
