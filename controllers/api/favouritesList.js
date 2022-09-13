const router = require('express').Router();
const { Crypto, User, UserCrypto } = require('../../models');


// GET the list of selected favourites, if none then response with none selected
// get list needs to be connected through the user ID to how many coins they have

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            // Join with Crypto through UserCrypto to see users favourite Cryptos
        include: [{ model: Crypto, through: UserCrypto, as: 'favourite_cryptos'}]
        })

        res.json(userData)
    } catch(error) {
        res.status(500).json(error)
    }
})



// router.get('/', async (req, res) => {
//     try {
//         const cryptoData = await Crypto.findAll({
//             where: {
//                 isFavourite: true
//             }
//         })

//         const favourites = cryptoData.map((project) => project.get({ plain: true }));
//         // IF NO FAVOURITE SELECTED THEN CAN BE REDIRECTED BACK TO LIST OF CRYPTO
//         if(cryptoData.length === 0) {
//             res.render('favourites').json({ message: 'You have no favourites selected. '});
//             return;
//         } else {
//             res.render('favourites', {
//                 favourites,
//                 logged_in: req.session.logged_in
//             });
//             return;
//         }
//     } catch(error) {
//         res.status(500).json(error)
//     }
// })

router.get('/', async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            where: {
                isFavourite: true
            }
        })
        res.json(cryptoData)
    }catch(error) {
        res.json(error)
    }})

//PUT to add/remove coins from favourites
router.put('/:id', async (req, res) => {
    try {
        const updateCrypto = await Crypto.findByPk(req.params.id)

        if(updateCrypto.isFavourite === true) {
            const trueToFalse = await Crypto.update({
                isFavourite: false
            }, {
                where: {
                    id: updateCrypto.id
                }
            })
            res.send({ message: 'Removed from favourites.'})
            return;
        } else {
            const falseToTrue = await Crypto.update({
                isFavourite: true
            }, {
                where: {
                    id: updateCrypto.id
                }
            })
            res.send({ message: 'Added to favourites.'})
            return;
        }
    } catch(error) {
        res.status(500).json(error)
    }
})


module.exports = router;