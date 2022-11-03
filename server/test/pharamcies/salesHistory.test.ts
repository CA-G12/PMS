import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('salesHistory router', () => {
  test('check good request pharmacy dose not exsect  => no data', (done) => {
    supertest(app)
      .get('/pharmacy/sales?page=20')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.SalesHistory.count).toBe(0);
        expect(res.body.SalesHistory.rows.length).toBe(0);
        return done();
      });
  });
  test('check good request', (done) => {
    supertest(app)
      .get('/pharmacy/sales?page=2')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.SalesHistory.count).toBe(0);
        expect(res.body.SalesHistory.rows.length).toBe(0);
        return done();
      });
  });

  test('check good request no data', (done) => {
    supertest(app)
      .get('/pharmacy/sales?page=4')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.SalesHistory.count).toBe(0);
        expect(res.body.SalesHistory.rows.length).toBe(0);
        return done();
      });
  });

  test('check bad request ', (done) => {
    supertest(app)
      .get('/pharmacy/sales?page=-1')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('OFFSET must not be negative');
        return done();
      });
  });
  test('check bad request ', (done) => {
    supertest(app)
      .get('/pharmacy/sales?page=ahmed')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        // eslint-disable-next-line prettier/prettier, no-useless-escape
        expect(res.body.msg).toEqual('column \"nan\" does not exist');
        return done();
      });
  });
  test('check bad request ', (done) => {
    supertest(app)
      .get('/pharmacy/sales?page=ahmed')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInJvbGUiOiJwaGFybWFjeSIsIm93bmVyX2ltZyI6Imh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTAvMDUvMjIvMzcvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF9fMzQwLnBuZyIsImlhdCI6MTY2NjcyNTA1OX0.q33WjnkpXhsbBML6JKrTzFGOiPqMJbhpUP4cfO2rh7A',
      ])
      .expect('Content-Type', /json/)
      .end((err: any, res: any) => {
        if (err) done(err);
        // eslint-disable-next-line prettier/prettier, no-useless-escape
        expect(res.body.msg).toEqual('column \"nan\" does not exist');
        return done();
      });
  });
});
