const { findBidding } = require('../models/pet')

exports.getBidding = async (req, res, next) => {
    try {
        const { id: petId } = req.params
        const biddings = await findBidding(petId)
        return res.status(200).json(biddings)
    } catch (error) {
        return res.status(500).send("something went wrong")
    }
}