const { Model } = require('objection')
const knex = require('../index')
Model.knex(knex)

class Pet extends Model {

    static get tableName() {
        return 'pet'
    }

    static get relationMappings() {
        return {
            bidding: {
                relation: Model.HasManyRelation,
                modelClass: require('./pet'),
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


module.exports = { insertPetAndFetch }