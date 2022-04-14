const express = require('express');
const app = express();
const client = require('./client');

app.get('/api/v1/images', async(req, res) => {
  try {
    const data = await client.query('SELECT * from images');   
    res.json(data.rows);
  } catch(e) {    
    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/error'));
app.use(require('./middleware/not-found'));
module.exports = app;
