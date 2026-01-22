const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
    describe('GET /', () => {
        test('returns API information', async () => {
            const response = await request(app).get('/');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('message');
            expect(response.body.status).toBe('running');
        });
    });

    describe('POST /api/sum', () => {
        test('calculates sum correctly', async () => {
            const response = await request(app)
                .post('/api/sum')
                .send({ a: 5, b: 3 });

            expect(response.status).toBe(200);
            expect(response.body.result).toBe(8);
            expect(response.body.operation).toBe('sum');
        });

        test('returns error for invalid input', async () => {
            const response = await request(app)
                .post('/api/sum')
                .send({ a: 'invalid', b: 3 });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });
    });

    describe('POST /api/subtract', () => {
        test('calculates subtraction correctly', async () => {
            const response = await request(app)
                .post('/api/subtract')
                .send({ a: 10, b: 4 });

            expect(response.status).toBe(200);
            expect(response.body.result).toBe(6);
        });
    });

    describe('POST /api/multiply', () => {
        test('calculates multiplication correctly', async () => {
            const response = await request(app)
                .post('/api/multiply')
                .send({ a: 3, b: 7 });

            expect(response.status).toBe(200);
            expect(response.body.result).toBe(21);
        });
    });
});
