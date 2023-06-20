const express = require('express')
const router = express.Router();

router.put('/', async (req, res) => {
    res.json({message: "Edit"})
})

module.exports = router