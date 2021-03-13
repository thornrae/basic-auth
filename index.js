'use strict';

const server = require('./src/server.js');
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => {
    console.log('what is happening')
    server.start(3000);
  })


  