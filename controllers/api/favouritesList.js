const router = require('express').Router();
const { Crypto } = require('../../models');


// GET the list of selected favourites, if none then response with none selected
// ADD IN THE HANDLEBARS RENDER PAGE OF FAVOURITES LIST
// get list needs to be connected through the user ID to how many coins they have
// / get the favourites
// use user id from session in the request search for in user forOne, and that will then draw from the favourites table the coins that are linked to that
router.get('/', async (req, res) => {
    try {
        
    } catch(error) {
        res.status(500).json(error)
    }
})

// POST to add coin to favourites
// use the req.sesssions.user_id to get id findOne from User database and then add the req.params.id for crypto to be added to the favourites table
router.post('/:id', async (req, res) => {
    try {

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