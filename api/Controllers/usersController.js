var usersController = function () {
    this.moment = require('moment');
    this.Config = require('../Config/config');
    this.user = require('../Models/user')
};
var path = require('path');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../Config/config');
var configs = require('../Config/config.js');
var salt = bcrypt.genSaltSync(10);
var Config = require('../Config/config.js');
// var transporter = nodemailer.createTransport(
//     smtpTransport('smtp://' + Config.SMTP.auth.user + ':' + Config.SMTP.auth.pass + '@' + Config.SMTP.host)
// );

var Handlebars = require('handlebars');
var moment = require('moment');

// // stripe.setApiVersion('2018-02-06');

usersController.prototype.login = function (req, callback) {

    const email = req.body.email;
    const password = req.body.password;
    this.user.findOne({
        email: email
    }).exec((err, userdata) => {
        if (err) {
            console.log('err', err)
            return callback({
                code: 204,
                data: [],
                status: 'failure',
                message: 'Please try again after some time'
            });
        } else if (userdata) {
            if (bcrypt.compareSync(password, userdata.hash)) {
                const params = {
                    id: userdata._id
                };
                const expirationDuration = 60 * 60 * 60;
                var jwtToken = jwt.sign(params, config.jwt_SECRETS, {
                    expiresIn: expirationDuration
                });
                console.log('userdata', userdata)
                const data = {
                    token: jwtToken,
                    id: userdata._id,
                }
                return callback({
                    code: 200,
                    data: data,
                    status: 'success',
                    message: 'Logged in successfully'
                });
            } else {
                return callback({
                    code: 205,
                    data: [],
                    status: 'failure',
                    message: 'Incorrect password'
                });
            }

        } else {
            return callback({
                code: 205,
                data: [],
                status: 'failure',
                message: 'Email does not exist'
            });
        }
    })

}

usersController.prototype.userRegisterInviate = function (req, callback) {
    var values = req.body;
    console.log('values', req.body)
    this.user.find({"email" : values.email }).exec((err, Result)=>{
        if(Result.length === 0){
            var password = values.password;
            var hash = bcrypt.hashSync(values.password, salt);
            var userData = new this.user({
                email: values.email,
                hash: hash,
                firstName: values.firstName,
                lastName: values.lastName
            })
            userData.save(function (err, Result) {
                if (Result) {
                    return callback({
                        code: 200,
                        status: 'success',
                        message: 'User Create successfully'
                    });        
        
                } else {
                    return callback({
                        code: 500,
                        data: [],
                        status: 'failure',
                        message: 'Internal server error'
                    });
                }
            })
        }else{
            return callback({
                code: 422,
                status: 'failure',
                message: 'User alredy exist'
            });
        }
    })

}

// usersController.prototype.createStripeConnectAccount = function (req, callback) {
//     console.log('account to be created', req.body)
//     stripe.accounts.create({
//         type: 'standard',
//         country: req.body.country_code,
//         email: req.body.email
//     }, function (err, account) {
//         if (err) {
//             console.log("err===>", err)
//             return callback({
//                 code: 204,
//                 status: 'failure',
//                 message: 'Stripe error',
//                 data: []
//             })
//         } else {
//             console.log("account===>", account)
//             return callback({
//                 code: 200,
//                 status: 'success',
//                 message: 'Account created successfully',
//                 data: account
//             })
//         }
//     });
// }
// // acct_1C2yOnGKSCWkMJ8B
// // acct_1C2yWSJXNXFnnKYo


// usersController.prototype.checkIfUserLoggedIn = function (req, callback) {
//     let values = req.body;
//     console.log('req body', req.body);
//     ticketAdmin.findOne({
//         email: values.emailId,
//         token: values.token
//     }).exec((err, instructorData) => {
//         if (err) {
//             console.log('err on finding instructor')
//             return callback({
//                 code: 400,
//                 status: 'failure',
//                 data: [],
//                 message: 'Database error'
//             });
//         } else if (instructorData) {
//             return callback({
//                 code: 200,
//                 status: 'success',
//                 data: [],
//                 message: 'Already logged in'
//             })
//         } else {
//             return callback({
//                 code: 404,
//                 status: 'failure',
//                 data: [],
//                 message: 'Not logged in'
//             })
//         }
//     });
// }

// usersController.prototype.logout = function (req, callback) {
//     console.log('logout reach');
//     if (req.headers.authorization) {
//         let authToken = req.headers.authorization.split(' ');
//         let token = authToken[1];
//         jwt.verify(token, config.jwt_SECRETS, (err, decoded) => {
//             if (err) {
//                 console.log('err', err)
//                 return callback({
//                     code: 300,
//                     status: 'failure',
//                     review: [],
//                     list: [],
//                     message: 'Not authorized'
//                 });
//             } else {
//                 let admin_id = decoded.id;
//                 ticketAdmin.findOneAndUpdate({
//                     token: req.body.token
//                 }, {
//                     token: null
//                 }).exec((err, success) => {
//                     if (err) {
//                         console.log('err', err)
//                         return callback({
//                             code: 400,
//                             status: 'failure',
//                             message: 'Something went wrong. Please try again after some time'
//                         });
//                     } else if (success) {
//                         console.log('success', success)
//                         return callback({
//                             code: 200,
//                             status: 'success',
//                             message: 'Logged out successfully'
//                         });
//                     }
//                 });
//             }
//         });
//     } else {

//     }
// }

module.exports = usersController