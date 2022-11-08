import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('login router', () => {
  test('check bad request', (done) => {
    supertest(app)
      .get('/pharmacy/1/overview')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });
  test('check good request', (done) => {
    supertest(app)
      .get('/pharmacy/11/overview')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('check good request no data', (done) => {
    supertest(app)
      .get('/pharmacy/111/overview')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
