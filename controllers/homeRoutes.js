// Import packages and models
const router = require("express").Router();
// Use axios to fetch data
const axios = require("axios");
const { User, Comment } = require("../models");
const withAuth = require("../utils/auth");
// Get only the latest coins and their data
const coinAPIKey = process.env.APIKEY;
const coinLatestRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${coinAPIKey}`;

// GET route for the homepage with coin data through API
router.get("/", withAuth, async (req, res) => {
  try {
    const response = await axios.get(coinLatestRoute);
    let responseData = await response.data;
    let coinData = responseData.data;

    res.render("homepage", {
      coinData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET single cryto from API and render their profile with comments
router.get("/crptoProfile/:id", withAuth, async (req, res) => {
  let userIDData = req.session.user_id;
  let coinID = req.params.id;

  const coinDetailedRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${coinID}&CMC_PRO_API_KEY=${coinAPIKey}`;
  try {
    // Get all the coin details
    const response = await axios.get(coinDetailedRoute);
    let responseData = await response.data;
    let coinData = responseData.data[coinID];

    // Get all the comments made for this coin
    const comment = await Comment.findAll({
      where: {
        coin_id: coinID,
      },
      attributes: ["user_id", "comment_text"],
    });

        const commentData = comment.map((project) => project.get({ plain: true }));

        // Get the username for each comment based on their user id
        for(let i = 0; i < commentData.length; i++) {
            let userNameById = commentData[i].user_id;
            const userNameCom = await User.findOne({ where: { id: userNameById } });
            const usernameFromId = userNameCom.username;
            commentData[i].username = usernameFromId;
        };
        
        res.render("cryptoProfile", {
            coinData,
            commentData,
            userIDData,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET for a single user info and render profile
router.get("/userProfile", withAuth, async (req, res) => {
  try {
    const userID = req.session.user_id;

    const user = await User.findOne({
      where: { id: userID },
      attributes: ["username", "email"],
    });
    let userData = user.dataValues;

    res.render("profile", {
      userData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET to render the contact page
router.get("/contact", async (req, res) => {
  try {
    res.render("contact", {
    logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET route that checks if user logged in
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
