const router = require('express').Router();
const { Crypto } = require('../../models/Crypto');

router.get('/', (req, res) => {
    res.send("WORKED crypto")
})

module.exports = router;