const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('responds with LMS API', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('LMS API');
  });
});

describe('API routes', () => {
  it('lists categories', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('lists assignments', async () => {
    const res = await request(app).get('/api/assignments');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('lists messages', async () => {
    const res = await request(app).get('/api/messages');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
