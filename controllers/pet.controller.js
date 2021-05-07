const { getBedding } = require('../models/user_pet_bidding')

exports.getBedding = async (req, res, next) => {
    try {
        const { id: petId } = req.params
        const biddings = await getBedding(petId)
        return res.status(200).json(biddings)
    } catch (error) {
        return res.status(500).send("something went wrong")
    }
}