'use strict';

const server = require('./src/server.js');
const mongoose = require('mongoose');
// server.start(3000);

// server.start(3000); having this uncommented gives me errors "server start is not a function"
//but, still get the server up console log in terminal

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true})
  // .then( () => {
  //   server.start(3000);
  // })
  // .catch(e => console.error('db error', e.message));