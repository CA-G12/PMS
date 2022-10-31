import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('Add Sales router', () => {
  test('check if sales are added successfully', (done) => {
    supertest(app)
      .post('/pharmacy/sales')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InBoYXJtYWN5Iiwib3duZXJfaW1nIjoiaHR0cDovL2ltYWdlcy5hc3NldHNkZWxpdmVyeS5jb20vY29tcGluZ3NfdjIvbWF2b2ltYWdlL21hdm9pbWFnZTE2MDEvbWF2b2ltYWdlMTYwMTAwMTY3LmpwZyIsImlhdCI6MTY2NzIxMzc3NX0.NTBp3oalLg3aXfwXhNJtChdBqbY3I5mKsP0yA4MxXCE',
      ])
      .send({
        quantity: 12,
        productId: 1,
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
      .post('/pharmacy/sales')
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
  test('check if there is a validation error', (done) => {
    supertest(app)
      .post('/pharmacy/sales')
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
        expect(res.body.msg).toEqual('"productId" must be a number');
        return done();
      });
  });

  test('check if sales are not added because pharmacy is not authorized', (done) => {
    supertest(app)
      .post('/pharmacy/sales')
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
