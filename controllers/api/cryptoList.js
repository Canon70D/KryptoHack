const router = require('express').Router();
const { Crypto, CoinList } = require('../../models');


// GET ID from coinList
router.get('/coinList/:symbol', async (req, res) => {
    try {
        const coinData = await CoinList.findAll({
            where: {
                symbol: req.params.symbol
            },
            attributes: ['coin_id', 'name'],
        });
        res.status(200).json(coinData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET by name ASC
// GET by name ASC
router.get("/name/asc", async (req, res) => {
    try {
        const cryptoData = await CoinList.findAll({
            order: [["name", "ASC"]],
    });

        const coinData = cryptoData.map((project) => project.get({ plain: true }));  
        res.render("homepage", {
            coinData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET by name DESC


//GET by price ASC


//GET by price DESC



// GET by 24 hour volume ASC

// GET by 24 hour volume DESC



//GET by marketcap ASC


//GET by marketcap DESC



module.exports = router;