import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('login router', () => {
  test('check bad request', (done) => {
    supertest(app)
      .get('/pharmacy/1')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.pharmacyData[0].id).toBe(1);
        return done();
      });
  });
  test('check good request', (done) => {
    supertest(app)
      .get('/pharmacy/11')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.pharmacyData[0].id).toBe(11);
        return done();
      });
  });

  test('check good request no data', (done) => {
    supertest(app)
      .get('/pharmacy/111')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.pharmacyData.length).toBe(0);
        done();
      });
  });
});
