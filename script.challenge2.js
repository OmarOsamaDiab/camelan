exports.gcp = (input) => {
    if (input.length <= 1) {
        return "No Winners"
    }
    input.sort((a, b) => {
        if (a.bid == b.bid) {
            if (a.user > b.user) return 1
            if (b.user > a.user) return -1
            return 0
        }
        return b.bid - a.bid
    })
    const len = input.length
    for (let i = 0; i < len - 1; ++i) {
        input[i].bid = input[i + 1].bid
    }
    input[len - 1].bid = "Lost"
    return input
}