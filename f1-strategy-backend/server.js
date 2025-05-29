const express = require('express');
const cors = require('cors');
const { simulateStrategy } = require('./simulator');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/simulate', (req, res) => {
  const strategy = req.body.strategy;
  if (!strategy || !Array.isArray(strategy)) return res.status(400).send('Invalid input');
  const result = simulateStrategy(strategy);
  res.json({ lapTimes: result });
});

app.listen(3000, () => {
  console.log('F1 Strategy Simulator API running on http://localhost:3000');
});