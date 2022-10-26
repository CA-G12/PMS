import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('addRequests router', () => {
  test('check good request', (done) => {
    supertest(app)
      .post('/pharmacy/1/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
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
      .post('/pharmacy/3/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .send({ quantityNum: 50, productId: 7 })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(201);
        expect(res.body.data.status).toEqual('Pending');
        expect(res.body.data.quantity).toBe(50);
        expect(res.body.data.product_id).toBe(7);
        expect(res.body.data.pharmacy_id).toBe(3);
        return done();
      });
  });
  test('check bad request', (done) => {
    supertest(app)
      .post('/pharmacy/100/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .send({ quantityNum: 5, productId: 2 })
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(500);
        // eslint-disable-next-line prettier/prettier, no-useless-escape
        expect(res.body.msg).toEqual('insert or update on table \"ProductsRequests\" violates foreign key constraint \"ProductsRequests_pharmacy_id_fkey\"');
        return done();
      });
  });
  test('check good request pharmacy dose not exsect  => no data', (done) => {
    supertest(app)
      .post('/pharmacy/1/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
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
      .post('/pharmacy/1/requests')
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
