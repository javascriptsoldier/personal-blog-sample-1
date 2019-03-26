'use strict';
module.exports = function (express, app, socket) {
    var app = app;
    var router = app;
    var Config = require('../Config/config.js');
    var jwt = require('jsonwebtoken');
    var Socket;
    var io = socket;
    var sk_test_ = Config.StripeKey;
    var http = require('http');
    // var stripe = require('stripe')(sk_test_);
    // stripe.setApiVersion('2018-02-06');
    // Controllers 
    var usersController = require('../Controllers/usersController.js')
    var authController = require('../Controllers/authController.js')
    var postController = require('../Controllers/postController.js')

    var usersController = new usersController();
    var authController = new authController();
    var postController = new postController();
    // var moment = require('moment-timezone');

    // function authenticate(req, res, next) {
    //     var token = req.headers.authorization.split(' ');
    //     jwt.verify(token[token.length - 1], Config.jwt_SECRETS, (err, decoded) => {
    //         if (err) {
    //             console.log('err auth', err)
    //             res.send({
    //                 code: 300,
    //                 status: 'failure',
    //                 review: [],
    //                 list: [],
    //                 message: 'Not authorized'
    //             });
    //         } else {
    //             res.locals.user = decoded;
    //             return next();
    //         }
    //     });
    // }

    // function authenticateSuper(req, res, next) {
    //     let token = req.headers.authorization.split(' ')[1];
    //     jwt.verify(token, Config.jwt_SECRETS, (err, decoded) => {
    //         console.log('err', err)
    //         if (err) {
    //             console.log('err=======================', err)
    //             res.send({
    //                 code: 300,
    //                 status: 'failure',
    //                 review: [],
    //                 list: [],
    //                 message: 'Not authorized'
    //             });
    //         } else {
    //             console.log("role of user>>>", decoded.id);
    //             ticketAdmin.findById(decoded.id).exec((err, SuperData) => {
    //                 if (SuperData) {
    //                     if (SuperData.role === 0) {
    //                         res.locals.user = decoded;
    //                         return next();
    //                     } else {
    //                         res.send({
    //                             code: 300,
    //                             status: 'failure',
    //                             review: [],
    //                             list: [],
    //                             message: 'Unauthorized role'
    //                         });
    //                     }
    //                 }
    //             })
    //         }
    //     });
    // }

    // Models


    io.on('connection', function (socket) {
        Socket = socket;
    });
    app.post('/api/user-sign-up', (req, res) => {
        usersController.userRegisterInviate(req, (result) => {
            console.log("hitted")
            res.send(JSON.stringify(result));
        })
    })
    app.post('/api/user-login', (req, res) => {
        usersController.login(req, (result) => {
            res.send(result);
        })
    })
    app.post('/api/add-post', (req, res) => {
        postController.addPost(req, (result) => {
            res.send(result);
        })
    })
    
    app.get('/api/list-posts', (req, res) => {
        postController.listAllPosts(req, (result) => {
            res.send(result);
        })
    })
    // Auth routes
    app.get('/api/check-user-login', (req, res) => {
        authController.checkUserLogin(req, (result) => {
            res.send(result);
        })
    })

    // // end auth routes


    // app.get('/api/convertHtmlToPdf', authenticate, (req, res) => {
    //     usersController.convertHtmlToPdf(req, (result) => {
    //         res.send(result);
    //     })
    // })
    // app.get('/api/emailUser', authenticate, (req, res) => {
    //     usersController.emailuser(req, (result) => {
    //         res.send(result);
    //     });
    // });
    // app.get('/api/get-user-data', (req, res) => {
    //     usersController.getUserData(req, (result) => {
    //         res.send(result);
    //     });
    // });
    // app.post('/api/check-if-user-logged-in', (req, res) => {
    //     usersController.checkIfUserLoggedIn(req, (result) => {
    //         res.send(result);
    //     });
    // });
    // app.get('/api/logout', (req, res) => {
    //     usersController.logout(req, (result) => {
    //         res.send(result);
    //     });
    // });
    // app.get('/api/emailAttendee', authenticate, (req, res) => {
    //     usersController.emailAttendee(req, (result) => {
    //         res.send(result);
    //     });
    // });
    // app.post('/api/search-attendee', authenticate, (req, res) => {
    //     usersController.searchAttendee(req, (result) => {
    //         res.send(result);
    //     });
    // });

};