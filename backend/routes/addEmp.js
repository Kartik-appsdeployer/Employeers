const express = require('express')
const router = express.Router();
const EmployeeDB = require('../models/addEmployee');

router.post('/',async (req, res) => {
    const { firstName, lastName, email, date, gender, company, education, experience, package } = req.body;
    // console.log(req.files, "This is File");
    const User = (await EmployeeDB.findOne({ email: email }) || await EmployeeDB.findOne({ email: email }))

    if (User) {
        res.json({ success: false, message: "Employee with this Email Already Exists!" })
    }
    else {
        await EmployeeDB.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            date: date,
            gender: gender,
            company: company,
            education: education,
            experience: experience,
            package: package
        }).then((obj) => {
            res.status(201).json({ success: true, message: "Successfully done" })
        }).catch((err) => {
            res.status(400).json({ success: false, message: err.message })
        })
    }

})

module.exports = router