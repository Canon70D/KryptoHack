const router = require("express").Router();
// Use axios to fetch data
const axios = require('axios');
const { Crypto, User } = require("../models");
const withAuth = require("../utils/auth");
// Get only the latest coins and their data
const coinAPIKey = "CMC_PRO_API_KEY=e3efea13-b74b-49bc-9eec-95f5d0473a69"
const coinLatestRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?${coinAPIKey}`;

router.get("/", withAuth, async (req, res) => {

    try {
        const response = await axios.get(coinLatestRoute)
        let responseData = await response.data
        let coinData = responseData.data

        // const cryptos = coinData.map((project) => project.get({ plain: true }));

        res.render("homepage", {
            coinData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Single cryto profile
router.get("/crptoProfile/:id", withAuth, async (req, res) => {
    coinID = req.params.id
    console.log(coinID);
    const coinDetailedRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${coinID}&${coinAPIKey}`;
    console.log(coinDetailedRoute);
    try {
        const response = await axios.get(coinDetailedRoute)
        let responseData = await response.data
        let coinData = (responseData.data)[coinID]

        res.render("cryptoProfile", {
            coinData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Single cryto profile
router.get("/userProfile", withAuth, async (req, res) => {
    // coinID = req.params.id
    // console.log(coinID);
    // const coinDetailedRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${coinID}&${coinAPIKey}`;
    // console.log(coinDetailedRoute);
    // try {
    //     const response = await axios.get(coinDetailedRoute)
    //     let responseData = await response.data
    //     let coinData = (responseData.data)[coinID]

    console.log(req.session.user_id);
    // const userData = await User.findByPk({
    //     where: {
    //         id: "1"
    //     },
    //     attributes: ['username', 'email', 'password'],
    // });

    // console.log(userData);

    res.render("profile", {
        // coinData ,
        logged_in: req.session.logged_in,
    });
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    // }
});

router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

module.exports = router;
