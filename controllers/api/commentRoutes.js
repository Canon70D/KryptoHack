const router = require('express').Router();
const { Comment } = require('../../models');

// create an Put endpoint where user comment can get saved into the database
// user needs to provide coin_id, user_id and comment fields as a request
router.post('/:userID/:coinID/:comment', async (req, res) => {
    let userID = req.params.userID
    let coinID = req.params.coinID
    let comment = req.params.comment

    try {
        const createComment = await Comment.create({
            user_id: userID,
            coin_id: coinID,
            comment_text: comment
        })

        res.status(200).json(createComment)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// This is the better way of doing the above post call if we have time
// router.post('/', async (req, res) => {
//     let userID = req.body.user_id
//     let coinID = req.body.coinID
//     let comment = req.body.comment

//     try {
//         const createComment = await Comment.create({
//             user_id: userID,
//             coin_id: coinID,
//             comment_text: comment
//         })

//         res.status(200).json(createComment)

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })



module.exports = router;