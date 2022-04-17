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

  it('get all images', async() => {
    const res = await request(app).get('/api/v1/images/')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body).toEqual(expect.arrayContaining([{ 'foamy': null, 'id': 1, 'last_modified': '2022-02-23T21:31:27.000Z', 'url': 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.24.38-9zijoye9dteugy6agooo506u3c6wrin920a99mavvv4z9mahkt7qbu6thl2l3v39.png' }]));
  });

  it('get image by ID', async() => {
    const res = await request(app).get('/api/v1/images/5')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body).toEqual(
      { 'foamy': null, 'id': 5, 'last_modified': '2022-02-23T21:31:27.000Z', 'url': 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.28.52-b0l43ldf7drejbvb9zwwdfk6mzrijepfskmd2fe2nnkypep4oykasytfad4jgs65.png' }
    );
  });

  it('update foamy tag', async() => {
    const expected = [{
      'foamy': true, 'id': 5, 'last_modified': '2022-02-23T21:31:27.000Z', 'url': 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.28.52-b0l43ldf7drejbvb9zwwdfk6mzrijepfskmd2fe2nnkypep4oykasytfad4jgs65.png'
    }];
    const res = await request(app)
      .patch('/api/v1/images/5')
      .send({ foamy: true });
    expect(res.body).toEqual(expected);
  });  
});
