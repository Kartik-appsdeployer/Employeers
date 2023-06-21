const express = require('express')
const router = express.Router();
const EmployeeDB = require('../models/addEmployee')

router.put('/:id', async (req, res) => {
    const User = await EmployeeDB.findById({_id: req.params.id})
    if(!User){
        res.json({success: false, message: "User Not Found"})
    }
    else{
        const {firstName, lastName, email, date, gender, edu, company, experience, package} = req.body;
        await EmployeeDB.findByIdAndUpdate({_id: req.params.id}, {
            $set: {firstName: firstName, lastName, email: email, date: date, gender: gender, education: edu, company: company, experience: experience, package: package}
        }).then((obj) => {
            res.json({success: true, message: "Employee Edited successfully"})
        })
    }
})


module.exports = router