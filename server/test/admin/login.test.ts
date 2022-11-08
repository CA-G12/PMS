import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('login router', () => {
  test('check if admin is logged in successfully', (done) => {
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
          expect(res.body.msg).toEqual('Success');
          done();
        }
      });
  });

  test('check if login throws error when logging with invalid password', (done) => {
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
        expect(res.body.msg).toEqual('Invalid email or password, Try again');
        return done();
      });
  });

  test('check if admin login throws error when logging with invalid password', (done) => {
    supertest(app)
      .post('/auth/login')
      .send({
        email: 'admin@gmail.com',
        password: 'adminadmi',
      })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Wrong Password, Try again');
        return done();
      });
  });

  test('check if login fails when validation error', (done) => {
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
        expect(res.body.msg).toEqual('Something went wrong, Try again');
        return done();
      });
  });
});
