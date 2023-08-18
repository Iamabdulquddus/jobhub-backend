const mongoose = require("mongoose");

const UserSchmea = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    location: { type: String, required: false},
    isAdmin: { type: Boolean, default: false},
    isAdmin: { type: Boolean, default: false},

});