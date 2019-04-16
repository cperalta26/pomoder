const request = require('supertest');
const server = require('./index');

describe('GET status', () => {
  it('/ responds with 200', (done) => {
    request(server)
      .get('/', (_, res) => {
        expect(res.statusCode).to.equal(200);
      })
      .end(done);
  });

  it('/* also responds with 200', (done) => {
    request(server)
      .get('/asdf', (_, res) => {
        expect(res.statusCode).to.equal(200);
      })
      .end(done);
  });
});
