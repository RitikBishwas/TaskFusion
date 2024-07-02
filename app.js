const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('./connection/conn');
const auth = require('./routes/auth');
const list = require('./routes/list');

app.use(express.json());
app.use(cors());

// Serve static files from the React app's build directory
app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));

app.use('/api/v1', auth);
app.use('/api/v2', list);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server Started on port 3000');
});
