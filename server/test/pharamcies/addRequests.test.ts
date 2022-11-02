import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('addRequests router', () => {
  test('check good request', (done) => {
    supertest(app)
      .post('/pharmacy/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InBoYXJtYWN5Iiwib3duZXJfaW1nIjoiaHR0cDovL2ltYWdlcy5hc3NldHNkZWxpdmVyeS5jb20vY29tcGluZ3NfdjIvbWF2b2ltYWdlL21hdm9pbWFnZTE2MDEvbWF2b2ltYWdlMTYwMTAwMTY3LmpwZyIsImlhdCI6MTY2NzI5MDk3Nn0.ER2AJWNEEmVI61wPQxrsYTH9SJWG38fQ3DfiNW8QJNM',
      ])
      .send({ quantityNum: 5, productId: 2 })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(201);
        expect(res.body.data.status).toEqual('Pending');
        expect(res.body.data.quantity).toBe(5);
        expect(res.body.data.product_id).toBe(2);
        expect(res.body.data.pharmacy_id).toBe(1);
        return done();
      });
  });
  test('check good request', (done) => {
    supertest(app)
      .post('/pharmacy/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InBoYXJtYWN5Iiwib3duZXJfaW1nIjoiaHR0cDovL2ltYWdlcy5hc3NldHNkZWxpdmVyeS5jb20vY29tcGluZ3NfdjIvbWF2b2ltYWdlL21hdm9pbWFnZTE2MDEvbWF2b2ltYWdlMTYwMTAwMTY3LmpwZyIsImlhdCI6MTY2NzI5MDk3Nn0.ER2AJWNEEmVI61wPQxrsYTH9SJWG38fQ3DfiNW8QJNM',
      ])
      .send({ quantityNum: 50, productId: 7 })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(201);
        expect(res.body.data.status).toEqual('Pending');
        expect(res.body.data.quantity).toBe(50);
        expect(res.body.data.product_id).toBe(7);
        expect(res.body.data.pharmacy_id).toBe(1);
        return done();
      });
  });
  test('check good request pharmacy dose not exsect  => no data', (done) => {
    supertest(app)
      .post('/pharmacy/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InBoYXJtYWN5Iiwib3duZXJfaW1nIjoiaHR0cDovL2ltYWdlcy5hc3NldHNkZWxpdmVyeS5jb20vY29tcGluZ3NfdjIvbWF2b2ltYWdlL21hdm9pbWFnZTE2MDEvbWF2b2ltYWdlMTYwMTAwMTY3LmpwZyIsImlhdCI6MTY2NzI5MDk3Nn0.ER2AJWNEEmVI61wPQxrsYTH9SJWG38fQ3DfiNW8QJNM',
      ])
      .send({ quantityNum: 5, productId: 200 })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(500);
        // eslint-disable-next-line prettier/prettier, no-useless-escape
        expect(res.body.msg).toEqual('insert or update on table \"ProductsRequests\" violates foreign key constraint \"ProductsRequests_product_id_fkey\"');
        return done();
      });
  });
  test('check bad request Unauthorized', (done) => {
    supertest(app)
      .post('/pharmacy/requests')
      .send({ quantityNum: 5, productId: 200 })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(401);
        expect(res.body.msg).toEqual('Unauthorized');
        return done();
      });
  });
});
