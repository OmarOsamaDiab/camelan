let server
const request = require('supertest')
const { deleteUser } = require('../models/user')
const { deletePet } = require('../models/pet')
const { deleteUserPetBidding } = require('../models/user_pet_bidding')

describe('/api/pet', () => {
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
    describe('GET /id', () => {
        it("should list all bidding for a specific pet successfully", async () => {
            const res = await request(server).get('/api/pet/1')
            expect(res.status).toBe(200)
        })
    })

})