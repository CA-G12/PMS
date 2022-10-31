import { Router } from 'express';
import { getAllProducts } from '../../controllers/pharamcies';

const pharmacyRouter = Router();

pharmacyRouter.get('/product', getAllProducts);

export default pharmacyRouter;
