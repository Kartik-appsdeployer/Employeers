const express = require('express')
const router = express.Router();
const EmployeeDB = require('../models/addEmployee')

router.get('/', async (req, res) => {
    const Employees = await EmployeeDB.find();
    res.json({success: true, message: "Successfully fetched", data: Employees})
})

module.exports = router