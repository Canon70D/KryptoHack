const router = require('express').Router();
const { Comment } = require('../../models');

// Get all comments by the crypto id and then they can output all the comments through the dom etc
// will need to reference it through the crypto id model
router.get('/', (req, res) => {
    res.send("comment")
})



module.exports = router;