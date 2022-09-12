const router = require("express").Router();
const { Crypto } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const cryptoData = await Crypto.findAll({
      order: [["id", "ASC"]],
    });

    const cryptos = cryptoData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      cryptos,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
