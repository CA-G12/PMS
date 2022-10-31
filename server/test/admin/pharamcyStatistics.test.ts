import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());
describe('Test for getting the Pharmacy Statistics', () => {
  test('Successful Request', (done) => {
    supertest(app)
      .get('/pharmacy/7/statistics')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.msg).toEqual('Statistics are sent successfully');
        return done();
      });
  });

  test('Error in PharmacyId validation', (done) => {
    supertest(app)
      .get('/pharmacy/;p/statistics')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(500);
        expect(res.body.msg).toEqual('"pharmacyId" must be a number');
        return done();
      });
  });
});
