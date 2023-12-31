const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ballance: {
        type: Number,
        default: 0
    }
}, { timestamps: true});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;