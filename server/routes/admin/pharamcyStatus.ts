import Router from 'express';
import { updatePharmacyStatusId } from '../../controllers';
import { adminAuth, auth } from '../../middlewares/index';

const router = Router();

router.put('/admin/pharmacy/:pharmacyId', auth, adminAuth, updatePharmacyStatusId);

export default router;
