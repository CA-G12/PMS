/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import supertest from 'supertest';
import { request } from 'http';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { getProductsAdmin, getOneProduct } from '../../queries';

beforeAll(() => buildSeeds());

describe('Testing pages routers and its status codes', () => {
  test('put Approved', (done) => {
    supertest(app)
      .put('/admin/requests/1')
      .send({ status: 'Approved' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('put Pending', (done) => {
    supertest(app)
      .put('/admin/requests/2')
      .send({ status: 'Pending' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('put Rejected', (done) => {
    supertest(app)
      .put('/admin/requests/2')
      .send({ status: 'Rejected' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('put invalid input', (done) => {
    supertest(app)
      .put('/admin/requests/3')
      .send({ status: 'hello' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
        done();
      });
  });
});

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
    getProductsAdmin().then((data) => {
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
    getOneProduct(1).then((data) => {
      expect(data.length).toEqual(1);
    });
  });
});

describe('Testing pages routers and its status codes', () => {
  test('put Approved for admin', (done) => {
    supertest(app)
      .put('/api/v1/admin/pharmacy/3')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('put invalid id', (done) => {
    supertest(app)
      .put('/api/v1/admin/pharmacy')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        done();
      });
  });
});
