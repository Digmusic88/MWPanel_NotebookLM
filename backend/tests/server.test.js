const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('responds with LMS API', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('LMS API');
  });
});
