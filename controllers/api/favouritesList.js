const router = require('express').Router();
const { Crypto } = require('../../models');


// GET ALL AND ADD IN THE 'WHERE: isFavourite: true'
router.get('/', async (req, res) => {
    try {
        const cryptoData = await Crypto.findAll({
            where: {
                isFavourite: true
            }
        })

        if(cryptoData.length === 0) {
            res.status(404).json({ message: 'You have no favourites selected. '});
            return;
        } else {
            res.status(200).json(cryptoData)
            return;
        }
    } catch(error) {
        res.status(500).json(error)
    }
})

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