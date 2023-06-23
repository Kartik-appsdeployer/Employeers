const { boolean } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const Employees = Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    package: {
        type: String,
        required: true,
    },
    login:{
        type: Boolean,
        default: false
    },
    logout:{
        type: Boolean,
        default: true
    }
})

const EmployeeDB = mongoose.model("employees", Employees);
module.exports = EmployeeDB;