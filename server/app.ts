import express, { Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { join } from 'path';
import getStatus from './routes/admin/adminPharamcyStatus';
import allProducts from './routes/admin/allAdminProduct';

require('env2')('.env');

const app = express();
const { NODE_ENV } = process.env;
app.use([
  compression(),
  cookieParser(),
  express.urlencoded({ extended: false }),
]);
app.use('/api/v1/', allProducts);
app.use('/api/v1/', getStatus);

app.set('port', process.env.PORT || 8080);

app.get('/data', (req: Request, res:Response) => res.send('Hello There!'));

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

export default app;
