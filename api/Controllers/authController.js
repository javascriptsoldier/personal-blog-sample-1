var authController = function () {
    this.moment = require('moment');
    this.Config = require('../Config/config');

};
var user = require("../Models/user.js");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../Config/config');
var Config = require('../Config/config.js');
const PBT_Main_server_url = Config.PBT_Main_server_url;

authController.prototype.checkUserLogin = function (req, callback) {
    console.log("here inside checkUserLogin/////////uer8888888888888//////", req.headers.authorization);
    try {
        if (req.headers.authorization) {
            let authToken = req.headers.authorization.split(' ');
            let token = authToken[1];
            if(token){
                jwt.verify(token, Config.jwt_SECRETS, (err, decoded) => {
                    if (err) {
                        // console.log('err', err)
                        return callback({
                            code: 300,
                            status: 'failure',
                            permission: '',
                            message: err.message
                        })
                    } else {
                        console.log('decoded', decoded)
                        console.log('===============================================')
                        user.find({_id: decoded.id}).exec((err, result)=>{

                            console.log('checkUserLogin------------00000000000000000000000000000000------------error', err)
                            console.log('result------------00000000000000000000000000000000------------>', result)
                            if (err) {
                                return callback({
                                    code: 205,
                                    status: 'failure',
                                    permission: '',
                                    message: 'Oops ! Please try again in some time'
                                });
                            } else if (result) {
                                return callback({
                                    code: 200,
                                    status: 'success',
                                    message: 'Logged in successfully'
                                });
                            } else {
                                return callback({
                                    code: 500,
                                    status: 'failure',
                                    permission: '',
                                    message: 'Internal server error'
                                });
                            }
                        })
                    }
                });
            }
        } else {
            return callback({
                code: 404,
                status: 'failure',
                permission: '',
                // message: 'Token not provided'
            });
        }
    } catch (error) {
        // console.log('error on', error)
        return callback({
            code: 404,
            status: 'failure',
            permission: '',
            // message: 'Token not provided'
        });
    }
}


module.exports = authController