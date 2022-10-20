import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('Admin Overview Statistics', () => {
    test('Get Admin overview', (done) => {
        supertest(app)
          .get('/admin/statistics')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.statusCode).toBe(200);
            return done();
          });
      });

    test('Get Admin overview and the data received', (done) => {
        supertest(app)
          .get('/admin/statistics')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.statusCode).toBe(200);
            expect(res.body.msg).toBe('Statistics are sent successfully');
            return done();
          });
      });

      test('Get Admin overview and the data received', (done) => {
        supertest(app)
          .get('/admin/statistics')
          .expect('Content-Type', /json/)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.statusCode).toBe(200);
            expect(res.body.msg).toBe('Statistics are sent successfully');
            return done();
          });
      });

})