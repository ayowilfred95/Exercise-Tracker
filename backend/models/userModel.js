const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Static signu method
// hashing the password with bcrypt


userSchema.statics.signup= async function(email,password) {
    const exists = await this.findOne({email});

    if(exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await this.create({email,password:hashedPassword})

    return user;
}

module.exports = mongoose.model('User',userSchema)
