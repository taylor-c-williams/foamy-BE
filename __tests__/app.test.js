const app = require('../lib/app');
const client = require('../lib/client');
const { execSync } = require('child_process');
const request = require('supertest');

describe('foamyBE routes', () => {
  beforeAll(async() => {
    execSync('npm run setup-db');
  
    await client.connect();
  });

  afterAll((done) => {
    client.end(done);
  });

  it('should not have a root route', async() => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(404);
  });
});
