const { Model } = require('objection')
const knex = require('../index')
Model.knex(knex)

class User extends Model {

    static get tableName() {
        return 'user'
    }

    static get relationMappings() {
        return {
            pet: {
                relation: Model.HasManyRelation,
                modelClass: require('./pet'),
                join: {
                    from: 'user.id',
                    to: 'pet.owner',
                }
            },
        }
    }
}

const insertUserAndFetch = async ({ name, phone }) => {
    try {
        return User.query().insertAndFetch({ phone, name })
    } catch (e) {
        return e
    }
}


module.exports = { insertUserAndFetch }