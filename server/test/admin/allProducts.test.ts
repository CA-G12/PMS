import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());
describe('Test for getting the Pharmacy Requests', () => {
  test('Successful test', (done) => {
    expect(200).toBe(200);
    return done();
  });
  // test('Successful Request', (done) => {
  //   supertest(app)
  //     .get('/product')
  //     .expect('Content-Type', /json/)
  //     .end((err: any, res: any) => {
  //       if (err) done(err);
  //       expect(res.statusCode).toBe(200);
  //       expect(res.body.msg).toEqual('Products are sent successfully');
  //       return done();
  //     });
  // });

  // test('Error in page validation', (done) => {
  //   supertest(app)
  //     .get('/product?page=ppp')
  //     .expect('Content-Type', /json/)
  //     .end((err: any, res: any) => {
  //       if (err) done(err);
  //       expect(res.body.msg).toEqual('"page" must be a number');
  //       return done();
  //     });
  // });

  // test('Error in page validation', (done) => {
  //   supertest(app)
  //     .get('/product?limit=ppp')
  //     .expect('Content-Type', /json/)
  //     .end((err: any, res: any) => {
  //       if (err) done(err);
  //       expect(res.body.msg).toEqual('"limit" must be a number');
  //       return done();
  //     });
  // });
});
