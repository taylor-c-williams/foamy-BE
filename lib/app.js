const express = require('express');
const app = express();
const client = require('./client');

app.use(express.json());

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


// Update Image (Foamy Tag) 
app.put('/api/v1/images/:id', async(req, res) => {
  try {
    const data = await client.query(`
    UPDATE images
     SET foamy = $1
     WHERE id = $2
     RETURNING *`,
    [req.body.foamy, req.params.id]);  

    res.json(data.rows);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/error'));
app.use(require('./middleware/not-found'));
module.exports = app;
