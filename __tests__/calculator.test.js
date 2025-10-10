const request = require('supertest');
const app = require('../index');

describe('Calculator API', () => {
  test('adds two numbers', async () => {
    const res = await request(app).get('/add?a=5&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  test('subtracts two numbers', async () => {
    const res = await request(app).get('/subtract?a=5&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(2);
  });

  test('multiplies two numbers', async () => {
    const res = await request(app).get('/multiply?a=5&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(15);
  });

  test('divides two numbers', async () => {
    const res = await request(app).get('/divide?a=6&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(2);
  });

  test('handles division by zero', async () => {
    const res = await request(app).get('/divide?a=5&b=0');
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe('Division by zero');
  });
});
