import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());
describe('Testing pages routers and its status codes', () => {
  test('put Approved for admin', (done) => {
    supertest(app)
      .put('/api/v1/admin/pharmacy/3')
      .expect('Content-Type', /json/)
      // eslint-disable-next-line consistent-return
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('put invalid id', (done) => {
    supertest(app)
      .put('/api/v1/admin/pharmacy')
      // eslint-disable-next-line consistent-return
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        done();
      });
  });
});
