'use strict';

const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
 username: { type: String, required: true},
 password: { type: String, required: true}
})


const Users = mongoose.model('users', usersSchema);
module.exports = Users;

//bcrypt because point at which saving to database so hash needed
