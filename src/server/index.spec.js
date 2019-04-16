const {expect} = require('chai');
const request = require('supertest');
const server = require('./index');

describe('GET status', () => {
  it('/ responds with 200', () => {
    request(server).get('/', (_, res) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('/* also responds with 200', () => {
    request(server).get('/asdf', (_, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
});