import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('addRequests router', () => {
  test('check good request', (done) => {
    supertest(app)
      .get('/pharmacy/productsInStock')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toEqual(200);
        expect(res.body.msg).toEqual('Success');
        expect(res.body.data.length).toBe(6);

        return done();
      });
  });
  test('check bad request Unauthorized', (done) => {
    supertest(app)
      .get('/pharmacy/productsInStock')
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
