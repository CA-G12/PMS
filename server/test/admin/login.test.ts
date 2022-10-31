import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('login router', () => {
  test('check if login with invalid password', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'ahmed@gmail.com',
        password: '123456789aaa',
      })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) {
          return done(err);
        }
        expect(res.body.msg).toEqual('invalid email or password');
        return done();
      });
  });

  test('check if login admin fails', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'admin@gmail.com',
        password: 'adminadmi',
      })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) {
          return done(err);
        }
        expect(res.body.msg).toEqual('invalid email or password');
        return done();
      });
  });

  test('check if login successfully', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'admin@gmail.com',
        password: 'adminadmin',
      })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) {
          done(err);
        } else {
          expect(res.body.msg).toEqual('successful');
          done();
        }
      });
  });
  test('check if login fails', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'admin',
        password: 'adm',
      })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) {
          return done(err);
        }
        expect(res.body.msg).toEqual('Something went wrong, sign up again');
        return done();
      });
  });
});
