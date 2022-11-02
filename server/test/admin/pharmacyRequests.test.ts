import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());
describe('Test for getting the Pharmacy Requests', () => {
  test('Successful Request', (done) => {
    supertest(app)
      .get('/pharmacy/1/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.msg).toEqual('Success');
        return done();
      });
  });

  test('Error in page and pharmacyId validation', (done) => {
    supertest(app)
      .get('/pharmacy/imim/requests')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('"pharmacyId" must be a number');
        return done();
      });
  });

  test('Error in page and pharmacyId validation', (done) => {
    supertest(app)
      .get('/pharmacy/1/requests?page=10nono')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('"page" must be a number');
        return done();
      });
  });
});
