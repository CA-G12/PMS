import supertest from 'supertest';
import buildSeeds from '../../database/seeds/buildSeeds';
import app from '../../app';

beforeAll(() => buildSeeds());

describe('login router', () => {
  test('check bad request', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=0')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.msg).toEqual('OFFSET must not be negative');
        return done();
      });
  });
  test('check good request', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=1')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.data.rows[0].id).toBe(1);
        expect(res.body.data.rows.length).toBe(7);
        return done();
      });
  });

  test('check good request', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=3')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.data.rows[0].id).toBe(15);
        expect(res.body.data.rows.length).toBe(6);
        done();
      });
  });

  test('check good request no data', (done) => {
    supertest(app)
      .get('/admin/requests?numOffSet=4')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
      ])
      .expect('Content-Type', /json/)
      .end((err:any, res: any) => {
        if (err) done(err);
        expect(res.body.data.rows.length).toBe(0);
        done();
      });
  });
});
