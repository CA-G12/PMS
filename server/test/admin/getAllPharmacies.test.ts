import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('Testing to get all Pharmacies', () => {
  test('Get all pharmacies', (done) => {
    supertest(app)
      .get('/admin/pharmacies')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.msg).toEqual('Pharmacies are returned successfully');
        return done();
      });
  });
  test('Get all pharmacies with sending status as Opened', (done) => {
    supertest(app)
      .get('/admin/pharmacies?status=Opened')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.data.count).toBe(6);
        return done();
      });
  });

  test('Get all pharmacies with sending status as Pending and the second Page', (done) => {
    supertest(app)
      .get('/admin/pharmacies?status=Pending&page=2')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.data.count).toBe(0);
        expect(res.body.data.rows.length).toBe(0);
        return done();
      });
  });

  test('Get all pharmacies with sending status as Closed', (done) => {
    supertest(app)
      .get('/admin/pharmacies?status=Closed')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.data.count).toBe(4);
        return done();
      });
  });

  test('Get all pharmacies with sending status as invalid type', (done) => {
    supertest(app)
      .get('/admin/pharmacies?status=new')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(500);
        return done();
      });
  });
});
