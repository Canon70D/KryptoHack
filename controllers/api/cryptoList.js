// Import
const router = require('express').Router();
const { CoinList } = require('../../models');

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

module.exports = router;