import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('Add Sales router', () => {
  test('check if sales are added successfully', (done) => {
    supertest(app)
      .post('/pharmacy/5/sales')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .send({
        quantity: 12,
        productId: 3,
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Sales are added successfully');
        return done();
      });
  });
  test('check if there is any validation error', (done) => {
    supertest(app)
      .post('/pharmacy/5/sales')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .send({
        quantity: '12ko',
        productId: 3,
      })
      .expect(500)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('"quantity" must be a number');
        return done();
      });
  });
  test('check if sales are added successfully', (done) => {
    supertest(app)
      .post('/pharmacy/5/sales')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .send({
        quantity: 12,
        productId: 'ko',
      })
      .expect(500)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual(
          'invalid input syntax for type integer: "NaN"'
        );
        return done();
      });
  });

  test('check if sales are added successfully', (done) => {
    supertest(app)
      .post('/pharmacy/5/sales')
      .send({
        quantity: 12,
        productId: 1,
      })
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthorized');
        return done();
      });
  });
});
