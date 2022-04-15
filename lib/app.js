const express = require('express');
const app = express();
const client = require('./client');

// Get All Images
app.get('/api/v1/images', async(req, res) => {
  try {
    const data = await client.query('SELECT * from images');   
    res.json(data.rows);
  } catch(e) {    
    res.status(500).json({ error: e.message });
  }
});

// Get Image by ID
app.get('/api/v1/images/:id', async(req, res) => {
  try {
    const data = await client.query('SELECT * from images WHERE id=$1', [req.params.id]);   
    res.json(data.rows[0]);
  } catch(e) {    
    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/error'));
app.use(require('./middleware/not-found'));
module.exports = app;
