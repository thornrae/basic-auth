'use strict';


const express = require('express');
const Users = require('./models/users-model.js');
const bcrypt = require('bcrypt');
const basicAuth = require('./middleware/basic.js');
require('mongoose');

const router = express.Router();

router.post('/signup', async(req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    console.log(req.body);
    const user = new Users(req.body)
    console.log(user);
    const record = user.save(req.body).then(results => {
      console.log('record..', results); //er
      res.status(200).json(results);
    }).catch(error => {
      console.log(error);
    })
    
  } catch {
    res.status(500).send('error creating user');
  }
})



router.post('/signin', basicAuth);

module.exports = router;


