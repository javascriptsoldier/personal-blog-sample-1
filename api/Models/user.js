const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const uuid = require('uuid')
var user = new Schema({
    userID : String,
    email: {
        type: String,
    },
    hash: {
        type: String,
    },
    language: {
        type: String,
        default: 'en'
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    lastLogin: {
        type: Date,
        default: moment.utc()
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    randomHash: {
        type: String
    },
    pbtProfileUrl: {
        type: String,
        default: "#"
    },
    isProfileUpdated: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true

})
// module.exports =  mongoose.model('user', user)

var user = mongoose.model('user', user);
module.exports = user;
user.find({
    role: 0
}).exec(function (err, data) {
    if (data.length === 0) {
        // user({email:"smartdata@yopmail.com",})
        user({
            userID: uuid(),
            email: 'javascriptsoldier@gmail.com',
            hash: bcrypt.hashSync("Funfast@07", salt),
            firstName: 'Anil',
            lastName: 'Kumar'
        }).save(function (err, adminData) {});
    }
});