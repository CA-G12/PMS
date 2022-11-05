/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { getProductId } from '../../queries';

beforeAll(() => buildSeeds());
describe('Testing pages routers for all admin products ', () => {
  test('get all product for pharmacy', (done) => {
    supertest(app)
      .get('/product/2')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('test get all products query', () => {
    getProductId(1).then((data: string | any[]) => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
