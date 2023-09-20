const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('Server Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should respond with "Hello from the backend!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello from the backend!');
  });

  // Add more route tests here
});

