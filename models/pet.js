const { Model } = require('objection')
const knex = require('./index')
Model.knex(knex)

class Pet extends Model {

    static get tableName() {
        return 'pet'
    }

    static get relationMappings() {
        return {
            bidding: {
                relation: Model.HasManyRelation,
                modelClass: require('./user_pet_bidding'),
                join: {
                    from: 'pet.id',
                    to: 'user_pet_bidding.petId',
                }
            },
        }
    }
}

const insertPetAndFetch = async ({ owner, name }) => {
    try {
        return Pet.query().insertAndFetch({ owner, name })
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

const findBidding = async petId => {
    try {
        return Pet.query().where('id', petId).withGraphFetched("bidding")
    } catch (e) {
        return e
    }
}




module.exports = { insertPetAndFetch, deletePet, findBidding }