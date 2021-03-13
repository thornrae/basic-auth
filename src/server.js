'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
const router = require('./auth/router.js');
// const basic = require('./auth/middleware/basic.js');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(router);
// app.use(basic);

// app.listen(PORT, () => {
//   console.log('server up', PORT);
// })

module.exports = {
  server: app,
  start: function(port){
      const PORT = port || process.env.PORT || 3000
      app.listen(PORT, () => console.log('listening on port ', PORT))
  }
}

