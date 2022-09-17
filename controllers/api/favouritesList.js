const router = require("express").Router();
const { User, Favourites } = require("../../models");
const axios = require("axios");
const coinAPIKey = process.env.APIKEY;

// GET the list of selected favourites
router.get("/", async (req, res) => {
  try {
    const userId = req.session.user_id;
    const user = await User.findOne({
      where: { id: userId },
      attributes: ["id"],
      include: [{ model: Favourites }],
    });
    let coinIds = user.favourites;
    let ids = coinIds.map((coin) => {
      return coin.coin_id;
    });

    let coinData = [];
    let coinDetailedRoute;

    for (let i = 0; i < ids.length; i++) {
      let idNum = ids[i];
      coinDetailedRoute = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${idNum}&CMC_PRO_API_KEY=${coinAPIKey}`;
      const response = await axios.get(coinDetailedRoute);
      let responseData = await response.data;
      let data = responseData.data[idNum];
      coinData.push(data);
    }

    res.render("favourites", {
      coinData,
      logged_in: req.session.logged_in,
    });
    // res.json(coinData)
  } catch (error) {
    res.status(500).json(error);
  }
});

// PUT route to check if coin id is in favourites and create it if isn't or delete if is to remove from favourites list
router.put("/:id", async (req, res) => {
  try {
    const userId = req.session.user_id;
    const coinId = req.params.id;
    console.log(coinId);

    const user = await User.findOne({
      where: { id: userId },
      attributes: ["id"],
      include: [{ model: Favourites }],
    });

    let coinIds = user.favourites;
    // res.json(coinIds)
    let coinInFav = 0;
    let coinData;

    for (let i = 0; i < coinIds.length; i++) {
      coinData = coinIds[i].dataValues.coin_id;
      console.log(coinData);
      if (coinData == coinId) {
        coinInFav++;
        console.log("is a match");
        // return;
      } else {
        console.log("NOT MATCH");
      }
    }

    if (coinInFav === 1) {
      // delete from the favourites
      const deleteFav = await Favourites.destroy({
        where: {
          coin_id: coinId,
        },
      });
      res.json("Does include");
    } else {
      // create and add to the favourites
      const addToFavourites = await Favourites.create({
        user_id: userId,
        coin_id: coinId,
      });
      res.json("Doesn't include");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
