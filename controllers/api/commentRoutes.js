const router = require('express').Router();
const { Comment } = require('../../models/Comment');

router.get('/', (req, res) => {
    res.send("comment")
})



module.exports = router;