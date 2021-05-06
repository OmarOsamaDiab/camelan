const { Model } = require('objection')
const knex = require('../index')
Model.knex(knex)

class UserPetBidding extends Model {
    static get tableName() {
        return 'user_pet_bidding'
    }
}

const addbidding = async ({ petId, owner, buyer }) => {
    try {
        return UserPetBidding.query().insert({ petId, owner, buyer })
    } catch (e) {
        return e
    }
}

module.exports = { UserPetBidding, addbidding }