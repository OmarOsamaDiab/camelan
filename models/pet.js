const { Model } = require('objection')
const { on } = require('./index')
const knex = require('./index')
Model.knex(knex)

class Pet extends Model {

    static get tableName() {
        return 'pet'
    }
}

const insertPetAndFetch = async owner => {
    try {
        return Pet.query().insertAndFetch({ owner })
    } catch (e) {
        return e
    }
}

const findBidding = async petId => {
    try {
        return Pet.query()
            .distinct("upb.cost")
            .join("user_pet_bidding as upb", 'pet.id', 'upb.petId')
            .where('pet.id', petId)
    } catch (e) {
        return e
    }
}

const deletePet = async () => {
    try {
        return Pet.query().delete()
    } catch (e) {
        return e
    }
}

module.exports = { insertPetAndFetch, deletePet, findBidding }