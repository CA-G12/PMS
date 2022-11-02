import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('Edit test', () => {
  test('Edit product request Fails because of the wrong status', (done) => {
    supertest(app)
      .put('/pharmacy/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InBoYXJtYWN5Iiwib3duZXJfaW1nIjoiaHR0cDovL2ltYWdlcy5hc3NldHNkZWxpdmVyeS5jb20vY29tcGluZ3NfdjIvbWF2b2ltYWdlL21hdm9pbWFnZTE2MDEvbWF2b2ltYWdlMTYwMTAwMTY3LmpwZyIsImlhdCI6MTY2NzMzMzE2MX0.eFqwJ0kbTNVF5R0x3iKfNcb_smQMsGBD32yqT1_SVZU',
      ])
      .send({
        id: 3,
        product_id: 1,
        quantity: 50,
      })
      .end((err: any, res: any) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        expect(res.body.msg).toEqual('Can not edit this request');

        return done();
      });
  });

  test('Edit product request succeeded', (done) => {
    supertest(app)
      .put('/pharmacy/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InBoYXJtYWN5Iiwib3duZXJfaW1nIjoiaHR0cDovL2ltYWdlcy5hc3NldHNkZWxpdmVyeS5jb20vY29tcGluZ3NfdjIvbWF2b2ltYWdlL21hdm9pbWFnZTE2MDEvbWF2b2ltYWdlMTYwMTAwMTY3LmpwZyIsImlhdCI6MTY2NzMzMzE2MX0.eFqwJ0kbTNVF5R0x3iKfNcb_smQMsGBD32yqT1_SVZU',
      ])
      .send({
        id: '1',
        product_id: '3',
        quantity: '50',
      })
      .end((err: any, res: any) => {
        if (err) return done(err);

        expect(res.statusCode).toBe(200);
        expect(res.body.msg).toEqual('Success');

        return done();
      });
  });

  test('Test fails because pharmacy is not authorized', (done) => {
    supertest(app)
      .put('/pharmacy/requests')
      .send({
        id: '1',
        product_id: '3',
        quantity: '50',
      })
      .end((err: any, res: any) => {
        if (err) return done(err);

        expect(res.statusCode).toBe(401);
        expect(res.body.msg).toEqual('Unauthorized');

        return done();
      });
  });
});
