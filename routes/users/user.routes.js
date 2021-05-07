const router = require("express").Router();
const userControllers = require("../../controllers/user.controller.js");

router.post('/:id/pet', userControllers.BiddingNewPet)

module.exports = router