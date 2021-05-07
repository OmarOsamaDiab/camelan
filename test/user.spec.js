let server
const request = require('supertest')
const { deleteUser } = require('../models/user')
const { deletePet } = require('../models/pet')
const { deleteUserPetBidding } = require('../models/user_pet_bidding')

describe('/api/user', () => {
    beforeEach(() => {
        server = require('../index')
    })
    afterEach(async () => {
        await Promise.all([
            deletePet,
            deleteUser,
            deleteUserPetBidding
        ])
        server.close()
    })
    describe('POST /id/pets', () => {
        it("should add new bidding successfully", async () => {
            const res = await request(server).post('/api/user/1/pet')
                .send({
                    petId: 1,
                    cost: 100
                })
            expect(res.status).toBe(201)
            expect(res.body).toHaveProperty('petId', 1)
            expect(res.body).toHaveProperty('cost', 100)
            expect(res.body).toHaveProperty('buyer', 1)
        })
    })

})