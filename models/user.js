const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    country: {type: String},
    resetPasswordToken: {type: String},
    resetPasswordExpiry: {type: Date},
});

module.exports = mongoose.model("Useer", userSchema);