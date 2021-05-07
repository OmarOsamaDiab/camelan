const router = require("express").Router();
const petControllers = require("../../controllers/pet.controller.js");

router.get('/:id', petControllers.getBidding)
module.exports = router