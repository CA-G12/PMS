/* eslint-disable no-unused-vars */
import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('Admin Overview Statistics', () => {
  test('edit product request faisl', (done) => {
    supertest(app)
      .put('/pharmacy/requests/requestId')
      .send({
        id: '5',
        product_id: '1',
        quantity: '50',
        name: 'product name',
        status: 'Approved',
      })
      .end((err: any, res: any) => {
        if (err) return done(err);

        expect(res.statusCode).toBe(404);
        expect(res.body.msg).toEqual('Can not Update');

        return done();
      });
  });
  test('edit product request success', (done) => {
    supertest(app)
      .put('/pharmacy/requests/requestId')
      .send({
        id: '1',
        product_id: '3',
        quantity: '50',
        name: 'product name',
        status: 'Pending',
      })
      .end((err: any, res: any) => {
        if (err) return done(err);

        expect(res.statusCode).toBe(200);
        expect(res.body.msg).toEqual('Edit Requests done');

        return done();
      });
  });
});
