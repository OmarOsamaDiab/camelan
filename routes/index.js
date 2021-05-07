const router = require("express").Router();
const userRoutes = require("./users/user.routes")
const petRoutes = require('./pets/pet.routes')

router.use('/user', userRoutes)
router.use('/pet', petRoutes)

module.exports = router