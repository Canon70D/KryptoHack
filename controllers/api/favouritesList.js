const router = require('express').Router();
const { User, Favourites} = require('../../models');
const axios = require('axios');
const coinAPIKey = "CMC_PRO_API_KEY=e3efea13-b74b-49bc-9eec-95f5d0473a69"

// GET the list of selected favourites
router.get('/', async (req, res) => {
    try {
        const userId = req.session.user_id
        const user = await User.findOne({
            where: { id: userId },
            attributes: ['id'],
            include: [{ model: Favourites}]
        });
        let coinIds = user.favourites
        let ids = coinIds.map(coin => {
            return coin.coin_id
        })

        let coinData = []
        let coinDetailedRoute;

        // coinDetailedRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${tempId}&${coinAPIKey}`;

        // const response = await axios.get(coinDetailedRoute)
        // let responseData = await response.data
        // let data = (responseData.data)[tempId]
        // coinData.push(data)

        for(let i = 0; i < ids.length; i++){
            let idNum = ids[i]
            coinDetailedRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${idNum}&${coinAPIKey}`;
            const response = await axios.get(coinDetailedRoute)
            let responseData = await response.data
            let data = (responseData.data)[idNum]
            coinData.push(data)
        }

        res.render("favourites", {
            coinData,
            logged_in: req.session.logged_in,
        });
        // res.json(coinData)
    } catch(error) {
        res.status(500).json(error)
    }
})


// POST to add coin to favourites
router.get('/:id', async (req, res) => {
    try {
        const userId = req.session.user_id
        const cryptoId = req.params.id

        // const ifUser = await User.findOne({
        //     where: {
        //         id: userId
        //     },
        //     attributes: ["id"]
        // })

        const addToFavourites = await Favourites.create({
            user_id: userId,
            coin_id: cryptoId
        })

        res.json(addToFavourites)
    } catch(error) {
        res.status(500).json(error)
    }
})

//DELETE to remove from favourites
router.delete('/:id', async (req, res) => {
    try {
        
    } catch(error) {
        res.status(500).json(error)
    }
})


module.exports = router;