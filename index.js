const express = require('express');
const logger = require('./middlewares/logger');

const port = 3000;

const app = express();

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(express.json());
app.use(logger);

app.post('/media', (req, res) => {
  const { n1, n2 } = req.body;
  if (!n1 || !n2) {
    return res.status(400).json({ error: 'Invalid request, must be two numbers: n1 and n2'});
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: 'Invalid numbers' });
  }      
  const media = Math.round(((n1 + n2) / 2) * 100) / 100;  
  return res.json({
    n1,
    n2,
    media    
  });  
});