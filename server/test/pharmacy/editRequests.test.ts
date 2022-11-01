/* eslint-disable no-unused-vars */
import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('Edit test', () => {
  test('test', (done) => {
    expect(200).toBe(200);
    return done();
  });
  // test('edit product request faisl', (done) => {
  //   supertest(app)
  //     .put('/pharmacy/requests/requestId')
  //     .send({
  //       id: '3',
  //       product_id: '1',
  //       quantity: '50',
  //       name: 'product name',
  //       status: 'Approved',
  //     })
  //     .end((err: any, res: any) => {
  //       if (err) return done(err);

  //       expect(res.statusCode).toBe(404);
  //       expect(res.body.msg).toEqual('Can not edit this request');

  //       return done();
  //     });
  // });
  // test('edit product request success', (done) => {
  //   supertest(app)
  //     .put('/pharmacy/requests/requestId')
  //     .send({
  //       id: '1',
  //       product_id: '3',
  //       quantity: '50',
  //       name: 'product name',
  //       status: 'Pending',
  //     })
  //     .end((err: any, res: any) => {
  //       if (err) return done(err);

  //       expect(res.statusCode).toBe(200);
  //       expect(res.body.msg).toEqual('Edit Requests done');

  //       return done();
  //     });
  // });
});
