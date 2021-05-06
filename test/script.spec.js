const { gcp } = require('../script.challenge2')

describe("gcp", () => {
    it("should return no winners in case of an empty array", () => {
        const input = []
        const result = gcp(input)
        expect(result).toMatch("No Winners")
    })
    it("should return no winners in case of an array of size 1", () => {
        const input = [{
            user: "John Doe",
            bid: 100
        }]
        const result = gcp(input)
        expect(result).toMatch("No Winners")
    })
    it("should return an array of winners sorted successfully", () => {
        const input = [{
            user: "John Doe",
            bid: 100
        }, {
            user: "John Smith",
            bid: 500
        }, {
            user: "Sara Conor",
            bid: 280
        }, {
            user: "Martin Fowler",
            bid: 320
        }]
        const result = gcp(input)
        expect(result.length).toBe(4)
        expect(result[0]).toMatchObject({
            user: "John Smith",
            bid: 320
        })
        expect(result[1]).toMatchObject({
            user: "Martin Fowler",
            bid: 280
        })
        expect(result[2]).toMatchObject({
            user: "Sara Conor",
            bid: 100
        })
        expect(result[3]).toMatchObject({
            user: "John Doe",
            bid: "Lost"
        })
    })
    it("should return an array of winners sorted successfully in case of tie", () => {
        const input = [{
            user: "John Doe",
            bid: 100
        }, {
            user: "John Smith",
            bid: 500
        }, {
            user: "Sara Conor",
            bid: 500
        }, {
            user: "Martin Fowler",
            bid: 320
        }]
        const result = gcp(input)
        expect(result.length).toBe(4)
        expect(result[0]).toMatchObject({
            user: "John Smith",
            bid: 500
        })
        expect(result[1]).toMatchObject({
            user: "Sara Conor",
            bid: 320
        })
        expect(result[2]).toMatchObject({
            user: "Martin Fowler",
            bid: 100
        })
        expect(result[3]).toMatchObject({
            user: "John Doe",
            bid: "Lost"
        })
    })
})
