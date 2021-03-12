'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt')
const Users = require('../models/users-model.js');

async function basicAuth (req, res) {
 let basicHeaderParts = req.headers.authorization.split(' ');
 let encodedString = basicHeaderParts.pop();
 let decodedString = base64.decode(encodedString);
 let [username, password] = decodedString.split(':');
 
 try {
   const user = await Users.findOne({ username: username})
   const valid = await bcrypt.compare(password, user.password);
   if(valid) {
     res.status(200).json(user)
   }
   else {
     throw new Error('invalid user');
   }
 } catch(error) {res.status(403).send("invalid login"); }
}

module.exports = basicAuth;









//authentication logic 
//simple encoding 
//bring in users-model.js

//used for signin 

//43-78


//55-58







