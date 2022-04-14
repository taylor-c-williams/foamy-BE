const express = require('express');
const app = express();

// app.use('/api/v1/images', require('./controller'));

app.use(require('./middleware/error'));
app.use(require('./middleware/not-found'));
module.exports = app;
