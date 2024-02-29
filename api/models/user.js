const { Token } = require("@mui/icons-material");
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    sentFollowRequest: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],

    recivedFollowingRequest: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    verified:{
        type: Boolean,
        default: false
    },
    verificationToken: String,

});

const User = mongoose.models('User', userSchema);
module.exports = User;