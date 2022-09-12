const router = require('express').Router();
const { Crypto } = require('../../models');

// GET all crypto
router.get('/', async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll()
        res.status(200).json(cryptoData)
    } catch(error) {
        res.status(500).json(error)
    }
})

// GET by name ASC


// GET by name DESC


//GET by price ASC


//GET by price DESC



// GET by 24 hour volume ASC

// GET by 24 hour volume DESC



//GET by marketcap ASC


//GET by marketcap DESC



module.exports = router;