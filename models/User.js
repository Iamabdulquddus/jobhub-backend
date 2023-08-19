const mongoose = require("mongoose");

const UserSchmea = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    location: { type: String, required: false },
    isAdmin: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    skills: { type: Array, default: false },
    profile: { type: String, required: true, default: "https://png.pngtree.com/png-clipart/20221014/ourmid/pngtree-human-profile-avatar-3d-icon-render-png-image_6319707.png" },

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchmea);