const express = require('express');
const router = express.Router();
const { createUserController } = require('../controllers/register.controller'); 

router.post('/createUser', createUserController);

module.exports = router;
