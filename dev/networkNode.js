const express = require('express');
const INFO = require('debug')('INFO');
const networkRoutes = require('./routes/network');

const port = process.argv[2];
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(networkRoutes);

app.listen(port, () => {
  INFO(`Listening on port ${port}...`);
});
