'use strict';


const express = require('express');
const Users = require('./models/users-model.js');
const bcrypt = require('bcrypt');
const app = express();
const basicAuth = require('./middleware/basic.js');

const router = express.Router();

router.post('/signup', async(req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const user = new Users(req.body)
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch {
    res.status(500).send('error creating user');
  }
})

router.post('/signin', basicAuth);


module.exports = router;



//sign in & sign up routes
//require user model
//require basic.js (bring in basic auth)


//app.js lines 31-37 when exported, will do the encrypting and decrypting 

//signup - user model
//sign in - basic auth
