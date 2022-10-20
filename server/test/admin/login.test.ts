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
        loginPassword: '123456789aaa',
      })
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
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
        loginPassword: 'adminadmi',
      })
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) {
          done(err);
        } else {
          expect(res.body.msg).toEqual('invalid email or password');
          done();
        }
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
        loginPassword: 'adm',
      })
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) {
          done(err);
        } else {
          expect(res.body.msg).toEqual('\"email\" must be a valid email');
          done();
        }
      });
  });
});
