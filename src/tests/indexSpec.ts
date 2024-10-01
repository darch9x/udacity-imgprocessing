import './helpers/reporter';
import request from 'supertest';
import app from '../index';

describe('should have routes', () => {
    it('should respond with 200 on GET /api', (done) => {
        request(app)
            .get('/api')
            .expect(200, done);
    });
    it('should respond with 400 on GET /api/images', (done) => {
        request(app)
            .get('/api/images')
            .expect(400, done);
    });
    it('should respond with 200 on GET /api/images?filename=fjord&width=400&height=400', (done) => {
        request(app)
            .get('/api/images?filename=fjord&width=400&height=400')
            .expect('Content-Type', 'image/jpg')
            .expect(200, done);
    });
});