// Import
const router = require("express").Router();
const { User } = require("../../models");

// GET all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET single user id and render profile page for user
router.get("/profile/:id", async (req, res) => {
  try {
    const userProfile = await User.findByPk(req.params.id);
    const user = userProfile.get({ plain: true });

    res.render("profile", user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET to signup page
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST to create account and redirect back to login page
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.redirect("/login");
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE user account
router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteData) {
      res.status(404).json({ message: "Could not delete." });
      return;
    }

    res.status(200).json(deleteData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST to check login and password that user entered for database
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST to logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
