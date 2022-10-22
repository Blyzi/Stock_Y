const express = require ('express');
const UsersController = require('../controller/users')

const router = express.Router();

router.post('/users', UsersController.createUsers );

module.exports = router;