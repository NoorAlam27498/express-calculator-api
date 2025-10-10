const request = require('supertest');
const app = require('../index');

describe('Calculator API', () => {
  it('adds two numbers', async () => {
    const res = await request(app).post('/add').send({ a: 5, b: 3 });
    expect(res.body.result).toBe(8);
  });

  it('subtracts two numbers', async () => {
    const res = await request(app).post('/subtract').send({ a: 10, b: 6 });
    expect(res.body.result).toBe(4);
  });

  it('multiplies two numbers', async () => {
    const res = await request(app).post('/multiply').send({ a: 2, b: 3 });
    expect(res.body.result).toBe(6);
  });

  it('divides two numbers', async () => {
    const res = await request(app).post('/divide').send({ a: 9, b: 3 });
    expect(res.body.result).toBe(3);
  });

  it('handles division by zero', async () => {
    const res = await request(app).post('/divide').send({ a: 5, b: 0 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Division by zero');
  });

  it('deletes a value from stored results', async () => {
    await request(app).post('/add').send({ a: 2, b: 2 }); // result = 4
    const del = await request(app).delete('/delete').send({ value: 4 });
    expect(del.body.message).toBe('Deleted 4');
  });

  it('returns error when deleting non-existent value', async () => {
    const res = await request(app).delete('/delete').send({ value: 999 });
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Value not found');
  });
});
