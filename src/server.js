'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');
const router = require('./auth/router.js');
const basic = require('./auth/middleware/basic.js');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(basic);

app.listen(PORT, () => {
  console.log('server up', PORT);
})

