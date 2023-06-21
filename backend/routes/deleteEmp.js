const express = require('express')
const router = express.Router();
const EmployeeDB = require('../models/addEmployee')

router.delete('/:id', async (req, res) => {
    await EmployeeDB.findByIdAndDelete({_id: req.params.id}).then((obj) => {
        res.json({success: true, message: "Deleted Successfully"})
    })
})

module.exports = router