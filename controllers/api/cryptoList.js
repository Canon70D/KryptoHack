const router = require('express').Router();
const { Crypto } = require('../../models');

// GET all crypto
// Don't need but good to have for testing
router.get('/', async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll();
        res.json(cryptoData)
    } catch(error) {
        res.json(error)
    }
})

// GET singular crypto
router.get('/:id', async (req, res) => {
    try {
        const cryptoData = await Crypto.findByPk(req.params.id);
        const crypto = cryptoData.get({ plain: true });

        res.render("crypto", {
            crypto,
            logged_in: req.session.logged_in
        })
        return;
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET by name ASC
router.get("/name/asc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["name", "ASC"]],
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

// GET by name DESC
router.get("/name/desc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["name", "DESC"]],
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

//GET by price ASC
router.get("/price/asc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["price", "ASC"]],
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

//GET by price DESC
router.get("/price/desc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["price", "DESC"]],
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


// GET by 24 hour volume ASC
router.get("/volume/asc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["day_volume", "ASC"]],
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

// GET by 24 hour volume DESC
router.get("/volume/desc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["day_volume", "DESC"]],
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


//GET by marketcap ASC
router.get("/marketcap/asc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["marketcap", "ASC"]],
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

//GET by marketcap DESC
router.get("/marketcap/desc", async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            order: [["marketcap", "DESC"]],
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

module.exports = router;