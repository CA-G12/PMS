import express, { Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import router from './routes/admin/requestStatus';
import authRouter from './routes/authentication/signUp';
import ErrorMiddleware from './middlewares/Error';
import adminRouter from './routes/admin/allPharmacies';

require('env2')('.env');

const app = express();
const { NODE_ENV, PORT } = process.env;

app.set('port', PORT || 8070);

app.use([
  compression(),
  cookieParser(),
  express.urlencoded({ extended: false }),
  express.json(),
]);
app.set('port', process.env.PORT || 8080);

app.use(router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
app.use(adminRouter);

app.use(authRouter);
app.use(ErrorMiddleware);

export default app;
