import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('pharmacies router', () => {
  test('check bad request', (done) => {
    supertest(app)
      .get('/pharmacy?page=0')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('OFFSET must not be negative');
        return done();
      });
  });
  test('check good request', (done) => {
    supertest(app)
      .get('/pharmacy?page=1')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('check good request with location', (done) => {
    supertest(app)
      .get('/pharmacy?page=1&location=gaza')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);

        done();
      });
  });

  test('check good request with location and name', (done) => {
    supertest(app)
      .get('/pharmacy?page=1&location=gaza&name=Muslim')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);

        done();
      });
  });
  test('check good request with location and name => no data', (done) => {
    supertest(app)
      .get('/pharmacy?page=1&location=gaza&name=Muslim ali')
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);

        done();
      });
  });
});
