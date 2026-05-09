const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const json = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlenght:[3, 'First name mus be atleast 3 characters long'],
        },
        lastname:{
            type:String,
            required: true,
            minlenght:[3, 'Last name mus be atleast 3 characters long'],
        }
    },
    email:{
        type:String,
        required: true,
        unique:true,
        minlenght:[5, 'Email must be atleast 5 characters long'],
    },
    password:{
        type:String,
        required:true,
        select: false,
    },
    socketId:{
        type:String,   
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = JsonWebTokenError.sign({_id:this._id}, process.env.JWT_SECRET);
    return token;
} 
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
} 
userSchema.methods.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
} 

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;