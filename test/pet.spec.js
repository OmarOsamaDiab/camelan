let server
const request = require('supertest')
const { deleteUser, insertUserAndFetch } = require('../models/user')
const { deletePet, insertPetAndFetch } = require('../models/pet')
const { deleteUserPetBidding, insertBiddingAndFetch } = require('../models/user_pet_bidding')

describe('/api/pet', () => {
    beforeEach(async () => {
        server = require('../index')
        await Promise.all([
            insertUserAndFetch("omar"),
            insertUserAndFetch("ahmed"),
            insertUserAndFetch("ali"),
            insertPetAndFetch(1),
            insertPetAndFetch(1),
            insertPetAndFetch(1),
            insertPetAndFetch(2),
            insertBiddingAndFetch({ petId: 1, cost: 10, buyer: 2 }),
            insertBiddingAndFetch({ petId: 1, cost: 10, buyer: 3 })
        ])
    })
    afterEach(async () => {
        await Promise.all([
            deletePet,
            deleteUser,
            deleteUserPetBidding
        ])
        server.close()
    })
    describe('GET /id', () => {
        it("should list all bidding for a specific pet successfully", async () => {
            const res = await request(server).get('/api/pet/1')
            expect(res.status).toBe(200)
        })
    })

})