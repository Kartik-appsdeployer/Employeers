const express = require('express')
const router = express.Router();

router.delete('/', async (req, res) => {
    res.json({message: "Done"})
})

module.exports = router