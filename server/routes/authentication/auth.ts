import express from 'express';
import { checkAuthData } from '../../controllers/authentication';
import { auth } from '../../middlewares';

const router: any = express.Router();

router.get('/auth', auth, checkAuthData);
