const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json('test ok!!');
});

app.post('/api/transaction', (req, res) => {
  const { name, description, datetime } = req.body;
  
  res.json(req.body);
});

app.listen(4000);
