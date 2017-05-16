const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.get('*', (req, res, next) => {
  if(req.path.split('/')[1] === 'static') return next();
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(5000, () => {
  console.log('42network listening on port 5000');
});
