var postController = function () {

}
var jwt = require('jsonwebtoken');
var config = require('../Config/config');
var post = require('../Models/blogpost')
function validateToken(token, callback) {
    console.log('token hittex')
    if (token) {
        jwt.verify(token, config.jwt_SECRETS, (err, decoded) => {
            if (err) {
                return callback(true, err)
            } else {
                return callback(false, decoded)
            }
        })
    } else {
        return callback(true, { 'message': 'No token provided' })
    }
};
postController.prototype.addPost = (req, callback) => {
    let authToken = req.headers.authorization.split(' ');
    let token = authToken[1];
        console.log(token)
    validateToken(token, (err, decoded) => {
        if (err) {
            return callback({
                code: 401,
                status: false,
                message: decoded.message
            });
        } else {
            var newPost = new post({
                'title': req.body.title,
                'description': req.body.description,
                'createdBy': decoded.id
            })
            newPost.save((err, Result) => {
                if (Result) {
                    return callback({
                        code: 200,
                        status: 'success',
                        message: 'Posted successfully'
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
        }
    })


}

postController.prototype.listAllPosts = (req, callback) => {
    const token = req.headers['x-access-token']; +
        console.log(token)
    post.find({}).populate('createdBy').sort({'createdAt': 1}).exec((err, Result) => {
        console.log('list post err----------->',err)
        console.log('list post Result----------->',Result)
        if (Result) {
            return callback({
                code: 200,
                status: 'success',
                post : Result,
                message: 'Posted successfully'
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
}
module.exports = postController