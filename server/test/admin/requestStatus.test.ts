import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';
import { sequelize } from '../../models';

beforeAll(() => buildSeeds());
afterAll(() => sequelize.close());

describe('Testing pages routers and its status codes', () => {
  test('put Approved', (done) => {
    supertest(app)
      .put('/admin/requests/1')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .send({ status: 'Approved' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('put Pending', (done) => {
    supertest(app)
      .put('/admin/requests/2')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .send({ status: 'Pending' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('put Rejected', (done) => {
    supertest(app)
      .put('/admin/requests/2')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .send({ status: 'Rejected' })
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        return done();
      });
  });

  test('put invalid input', (done) => {
    supertest(app)
      .put('/admin/requests/3')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .send({ status: 'hello' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
        return done();
      });
  });
});
