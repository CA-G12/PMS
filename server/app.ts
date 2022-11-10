import express, { Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { join } from 'path';

import router from './routes';
import ErrorMiddleware from './middlewares/Error';

require('env2')('.env');

const app = express();
const { NODE_ENV } = process.env;

app.set('port', process.env.PORT || 8080);

app.use([
  compression(),
  cookieParser(),
  express.urlencoded({ extended: false }),
  express.json(),
]);
app.use(router);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(ErrorMiddleware);

export default app;
