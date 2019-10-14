const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');

// Middleware logger
app.use(volleyball);

// Serves static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Renders index.html
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;
