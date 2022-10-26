import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('sign up router', () => {
  test('check if Pharmacy signed up successfully', (done) => {
    supertest(app)
      .post('/auth/signup')
      .send({
        owner_name: 'Ibtisam',
        owner_id: '1',
        name: 'Palestine Pharmacy',
        license_number: '558',
        location: 'Gaza',
        phone: '0598635',
        email: 'ibtisam@gmail.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) return done(err);

        expect(res.body.msg).toEqual('You have signed up successfully');
        return done();
      });
  });

  test('check if Pharmacy already signed with the same license number', (done) => {
    supertest(app)
      .post('/auth/signup')
      .send({
        owner_name: 'Ibtisam',
        owner_id: '1',
        name: 'Palestine Pharmacy',
        license_number: '558',
        location: 'Gaza',
        phone: '0598635',
        email: 'ibtisam@gmail.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) return done(err);

        expect(res.body.msg).toEqual('Try again, This Pharmacy is already Signed');
        return done();
      });
  });

  test('check if this emails Pharmacy already with the same email address', (done) => {
    supertest(app)
      .post('/auth/signup')
      .send({
        owner_name: 'Ibtisam',
        owner_id: '1',
        name: 'Palestine Pharmacy',
        license_number: '5584',
        location: 'Gaza',
        phone: '0598635',
        email: 'ibtisam@gmail.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) return done(err);

        expect(res.body.msg).toEqual('Try again, This email is already existed');
        return done();
      });
  });

  test('check if this emails is not the same as admin email', (done) => {
    supertest(app)
      .post('/auth/signup')
      .send({
        owner_name: 'Ibtisam',
        owner_id: '1',
        name: 'Palestine Pharmacy',
        license_number: '5584',
        location: 'Gaza',
        phone: '0598635',
        email: 'admin@gmail.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) return done(err);

        expect(res.body.msg).toEqual(
          'Try again, You can not sign up with this email'
        );
        return done();
      });
  });

  test('check if this emails Pharmacy is validated ang good to go', (done) => {
    supertest(app)
      .post('/auth/signup')
      .send({
        owner_name: 'Ibtisam',
        owner_id: '1',
        name: 'Palestine Pharmacy',
        license_number: '5584',
        location: 'Gaza',
        phone: '0598635',
        email: 'gmail.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) return done(err);

        expect(res.body.msg).toEqual('Something went wrong, sign up again');
        return done();
      });
  });
});
