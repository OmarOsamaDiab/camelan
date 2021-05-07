const { insertBiddingAndFetch } = require('../models/user_pet_bidding')

exports.BiddingNewPet = async (req, res, next) => {
    try {
        const { id: buyer } = req.params
        const { petId, cost } = req.body
        const newBidding = await insertBiddingAndFetch({ petId, buyer, cost })
        return res.status(201).json(newBidding)
    } catch (error) {
        return res.status(500).send(error)
    }
}