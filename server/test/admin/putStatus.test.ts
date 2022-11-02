/* eslint-disable no-unused-vars */
import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('Admin Overview Statistics', () => {
  test('Get Admin overview', (done) => {
    supertest(app)
      .get('/admin/statistics')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('Get Admin overview and the data received', (done) => {
    supertest(app)
      .get('/admin/statistics')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.msg).toBe('Success');
        return done();
      });
  });
});
