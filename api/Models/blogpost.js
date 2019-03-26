const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var blogpost = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    isProfileUpdated: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true

})
// module.exports =  mongoose.model('user', user)

var blogpost = mongoose.model('blogpost', blogpost);
module.exports = blogpost;