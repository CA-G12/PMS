import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('login router', () => {
  test('check if login with invalid password', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=0')
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('OFFSET must not be negative');
        return done();
      });
  });
  test('check if login with invalid password', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=1')
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.data.rows[0].id).toBe(1);
        expect(res.body.data.rows.length).toBe(7);
        return done();
      });
  });

  test('check if login with invalid email', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=3')
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.data.rows[0].id).toBe(15);
        expect(res.body.data.rows.length).toBe(6);
        done();
      });
  });

  test('check if login successfully', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=4')
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.data.rows.length).toBe(0);
        done();
      });
  });
});
