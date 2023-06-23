const express = require('express')
const router = express.Router();
const EmployeeDB = require('../models/addEmployee');

router.put('/', async (req, res) => {
    const Email = req.body.email;
    const User = await EmployeeDB.findOne({email:Email})
    const UserId = User._id.toString()
    await EmployeeDB.findByIdAndUpdate({_id: UserId}, {$set: {logout: true, login: false}}).then((obj) => {

        res.json({message: "Done", data: obj})
    })
})

module.exports = router;