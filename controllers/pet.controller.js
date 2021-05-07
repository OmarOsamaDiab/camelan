const { findBidding } = require('../models/pet')

exports.getBidding = async (req, res, next) => {
    try {
        const { id: petId } = req.params
        let biddings = await findBidding(petId)
        biddings = biddings.map(b => b.cost)
        return res.status(200).json({ biddings: biddings })
    } catch (error) {
        return res.status(500).send("something went wrong")
    }
}