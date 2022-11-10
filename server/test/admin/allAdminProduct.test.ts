// /* eslint-disable consistent-return */
// /* eslint-disable no-undef */
// import supertest from 'supertest';
// import buildSeeds from '../../database/seeds/buildSeeds';
// import app from '../../app';
// import { getProductsAdmin } from '../../queries';

// beforeAll(() => buildSeeds());
// describe('Testing pages routers for all admin products ', () => {
//   test('get all product admin  for admin', (done) => {
//     supertest(app)
//       .get('/admin/products')
//       .set('Cookie', [
//         'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL3N0YXRpYy5zcGFjZWNyYWZ0ZWQuY29tL2VjYjg0ZmZjMDU4ODRjZjdhYWJmNDBjYTU2OTdlZmFlL2kvYjAzMTQxYjg3ZTM2NGQ5N2FjYTI1NDgwNzZlMTJlOGQvMS80U29pZm1RcDQ1Sk1nQm5IcDdlZDIvUGhhcm1hY3klMjBJbWFnZSUyNTI4MzElMjUyOS5qcGcgfCAyMDIyLTEwLTIzIDE0OjQ1OjQyLjgyNiswMyJ9.SNxK4D9wnKnyzaHMVjXICjL6XfAuBDeLg3bgS9VD7BM',
//       ])
//       .expect('Content-Type', /json/)
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.statusCode).toBe(200);
//         done();
//       });
//   });
//   test('test get all products query', () => {
//     getProductsAdmin().then((data: string | any[]) => {
//       expect(data.length).toBeGreaterThan(0);
//     });
//   });
// });
