import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('login router', () => {
  test('check if login with invalid password', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'ahmed@gmail.com',
        loginPassword: '123456789aaa',
      })
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('invalid email or password');
        return done();
      });
  });

  test('check if login with invalid email', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'ahmeddd@gmail.com',
        loginPassword: '123456789aaa',
      })
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('invalid email or password');
        done();
      });
  });

  test('check if login successfully', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'admin@gmail.com',
        loginPassword: 'adminadmin',
      })
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('successful');
        done();
      });
  });
});
