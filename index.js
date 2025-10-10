const express = require('express');
const app = express();
app.use(express.json());

let numbers = []; // store results temporarily

app.get('/', (req, res) => {
  res.send('Welcome to Calculator API');
});

app.get('/list', (req, res) => {
  res.json({ numbers });
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  numbers.push(result);
  res.json({ result });
});

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  const result = a - b;
  numbers.push(result);
  res.json({ result });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  const result = a * b;
  numbers.push(result);
  res.json({ result });
});

app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) return res.status(400).json({ error: 'Division by zero' });
  const result = a / b;
  numbers.push(result);
  res.json({ result });
});

app.delete('/delete', (req, res) => {
  const { value } = req.body;
  const index = numbers.indexOf(value);
  if (index === -1) {
    return res.status(404).json({ error: 'Value not found' });
  }
  numbers.splice(index, 1);
  res.json({ message: `Deleted ${value}`, numbers });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
