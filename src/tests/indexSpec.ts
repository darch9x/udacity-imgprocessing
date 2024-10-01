import './helpers/reporter';
import request from 'supertest';
import app from '../index';

describe('should have routes', () => {
  it('should respond with 200 on GET /api', async () => {
    const res = await request(app).get('/api');
    expect(res.status).toBe(200);
  });
  it('should respond with 400 on GET /api/images', async () => {
    const res = await request(app).get('/api/images');
    expect(res.status).toBe(400);
  });
  it('should respond with 200 on GET /api/images?filename=fjord&width=400&height=400', async () => {
    const res = await request(app).get('/api/images?filename=fjord&width=400&height=400');
    expect(res.status).toBe(200);
  });
});
