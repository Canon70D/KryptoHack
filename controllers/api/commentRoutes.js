const router = require('express').Router();
const { Comment } = require('../../models');

// Get all comments by the crypto id and then they can output all the comments through the dom etc
// will need to reference it through the crypto id model
// GET comments using crypto id as parameter
router.get('/:id', async (req, res) => {
    try {
        
    } catch(error) {
        res.status(500).json(error)
    }
})



module.exports = router;