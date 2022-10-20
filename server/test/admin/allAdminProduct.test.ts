/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { getProductsAdmin, getOneProduct } from '../../queries';

beforeAll(() => buildSeeds());
describe('Testing pages routers for all admin products ', () => {
  test('get all product admin  for admin', (done) => {
    supertest(app)
      .get('/api/v1/admin/products')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('test get all products query', () => {
    getProductsAdmin().then((data: string | any[]) => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
describe('Testing pages routers for all admin products by id ', () => {
  test('get all product admin  for admin', (done) => {
    supertest(app)
      .get('/api/v1/admin/products/3')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test('test get all products query id ', () => {
    getOneProduct(1).then((data: string | any[]) => {
      expect(data.length).toEqual(1);
    });
  });
});
