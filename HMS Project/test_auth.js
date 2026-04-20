const http = require('http');

const data = JSON.stringify({
  name: "Test User " + Date.now(),
  email: `test${Date.now()}@example.com`,
  password: "password123",
  role: "patient"
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/auth/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  console.log('Status Code:', res.statusCode);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error('Request error:', error);
});

req.write(data);
req.end();
