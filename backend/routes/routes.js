const express = require('express')
const router = express.Router();
const AddEmp = require('./addEmp')
const EditEmp = require('./editEmp')
const DeleteEmp = require('./deleteEmp')
const AllEmp = require('./getAllEmp')
const userLogin = require('./userLogin')
const userLogout = require('./userLogout');

router.use('/addEmp', AddEmp)
router.use('/editEmp', EditEmp)
router.use('/deleteEmp', DeleteEmp)
router.use('/getAllEmp', AllEmp)
router.use('/userLogin', userLogin)
router.use('/userLogout', userLogout)

module.exports = router