const router = require('express').Router();
const { User, Favourites} = require('../../models');


// get the favourites
// use user id from session in the request search for in user forOne, and that will then draw from the favourites table the coins that are linked to that
router.get('/', async (req, res) => {
    try {
        
    }catch(error) {
        res.json(error)
    }
})


// POST request using the req.session.user_id for the user name and then use the id from the params to add to the favourites
router.post('/:id', async (req, res) => {

})


//delete to take the favourite out once clicked
router.delete('/:id', async (req, res) => {
    try {
        
    } catch(error) {
        res.status(500).json(error)
    }
})


module.exports = router;