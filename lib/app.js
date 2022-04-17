const express = require('express');
const app = express();
const client = require('./client');

app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin', 'http://localhost:3000',
    'Access-Control-Allow-Headers', 'X-PINGOTHER, Content-type',
    'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT',
    'Content-Type', 'application/json',
  );
  next();
});

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, X-PINGANOTHERR'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PATCH, DELETE, OPTIONS, PUT'
//   );
//   next();
// });

app.options('*', (req, res) => {
  res.status(200).send();
});


// Get All Images
app.get('/api/v1/images', async(req, res) => {
  try {
    const perPage = req.query.perPage;
    const pageNumber = req.query.pageNumber;

    const currentOffset = (pageNumber - 1)  * perPage;

    const data = await client.query('SELECT * from images LIMIT $1 OFFSET $2', [perPage, currentOffset]);
    res.json(data.rows);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Get Image by ID
app.get('/api/v1/images/:id', async(req, res) => {
  try {
    const data = await client.query('SELECT * from images WHERE id=$1', [
      req.params.id,
    ]);
    res.json(data.rows[0]);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// Update Image (Foamy Tag)
app.patch('/api/v1/images/:id', async(req, res) => {
  try {
    const data = await client.query(
      `
    UPDATE images
     SET foamy = $1
     WHERE id = $2
     RETURNING *`,
      [req.body.foamy, req.params.id]
    );

    res.json(data.rows);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/error'));
app.use(require('./middleware/not-found'));
module.exports = app;
