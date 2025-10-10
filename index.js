const express = require('express');
const app = express();

app.use(express.json());

// ✅ Define your routes
app.get('/', (req, res) => {
  res.send('Welcome to the Calculator API!');
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send('Missing parameters');
  const sum = parseFloat(a) + parseFloat(b);
  res.json({ result: sum });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send('Missing parameters');
  const result = parseFloat(a) - parseFloat(b);
  res.json({ result });
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send('Missing parameters');
  const result = parseFloat(a) * parseFloat(b);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send('Missing parameters');
  if (parseFloat(b) === 0) return res.status(400).send('Division by zero');
  const result = parseFloat(a) / parseFloat(b);
  res.json({ result });
});

// ✅ Only start the server if file is run directly (not required by Jest)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// ✅ Export app for testing
module.exports = app;
