const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:false
    },
    city:{
        type: String,
        required:false
    },
},
{
    timestamps:true
});

module.exports = customerSchema;