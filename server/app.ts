import express, { Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import authRouter from './routes/authentication/signUp';

require('env2')('.env');

const app = express();
const { NODE_ENV, PORT } = process.env;

app.set('port', PORT || 8070);

app.use([
  compression(),
  cookieParser(),
  express.urlencoded({ extended: false }),
  express.json()
]);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(authRouter);

export default app;
