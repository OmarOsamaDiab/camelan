const { Model } = require('objection')
const knex = require('./index')
Model.knex(knex)

class UserPetBidding extends Model {
    static get tableName() {
        return 'user_pet_bidding'
    }
}

const insertBiddingAndFetch = async ({ petId, cost, buyer }) => {
    try {
        return UserPetBidding.query().insertAndFetch({ petId, cost, buyer })
    } catch (e) {
        return e
    }
}


const deleteUserPetBidding = async () => {
    try {
        return UserPetBidding.query().delete()
    } catch (e) {
        return e
    }
}

module.exports = { insertBiddingAndFetch, deleteUserPetBidding }