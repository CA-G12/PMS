/* eslint-disable consistent-return */
/* eslint-disable no-undef */
// const {Request, Response} = require('express');
// import buildSeeds from '../../database/seeds/buildSeeds';
import supertest from 'supertest';
// const router = require('../../app.t');
import app from '../../app';
// beforeAll(() => buildSeeds());

describe('Testing pages routers and its status codes', () => {
  test('test', () => {
    expect(1).toBe(1);
  });
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
