import express from 'express';
import { logout } from '../../controllers';

const logoutRouter: any = express.Router();

logoutRouter.get('/logout', logout);

export default logoutRouter;
