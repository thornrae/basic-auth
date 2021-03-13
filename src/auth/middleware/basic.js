'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt')
const Users = require('../models/users-model.js');

async function basicAuth (req, res) {
 let basicHeaderParts = req.headers.authorization.split(' ')[1];

 console.log('basicheaderparts..', basicHeaderParts);
//  let encodedString = basicHeaderParts.pop();
//  console.log(encodedString)
//  let password = encodedString.split(':').pop();
//  console.log('password', password)
 let decodedString = base64.decode(basicHeaderParts);
//  let [username, password] = decodedString.split(':');
console.log('decoded string..', decodedString);
let username = decodedString.split(':')[0];
let password = decodedString.split(':')[1];
// console.log('username&password', username, password);
 
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



// let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
// let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
// let decodedString = base64.decode(encodedString); // "username:password"
// let [username, password] = decodedString.split(':'); // username, password


