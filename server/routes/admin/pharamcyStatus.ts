import Router from 'express';
import { getPharmacyStatusId } from '../../controllers';

const router = Router();

router.put('/admin/pharmacy/:pharmacyId', getPharmacyStatusId);

export default router;
