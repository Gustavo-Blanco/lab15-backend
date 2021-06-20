const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.index);

/**
 * Esto devuelve:
 * {
 * "status": 200,
 * "user": {
 * "_id": "Id",
 * "name": "string",
 * "password": "string",
 * "technical": boolean,
 * "__v": 0
 * }
}
*/
router.post('/loginOrRegister', userController.registerOrLogin);


module.exports = router;