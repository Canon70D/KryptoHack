// Import models
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cryptoRoutes = require('./cryptoList');
const commentRoutes = require('./commentRoutes');
const favouritesRoutes = require('./favouritesList');

// Create router paths
router.use('/users', userRoutes);
router.use('/cryptos', cryptoRoutes);
router.use('/comments', commentRoutes);
router.use('/favourites', favouritesRoutes);

module.exports = router;
