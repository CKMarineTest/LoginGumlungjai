const express = require('express');
const router = express.Router();
const { getEfillingController, getEfillingByIdCardController, getEfillingPhotoController } = require('../controllers/efilling.controller');

router.get('/getEfilling', getEfillingController);
router.get('/getEfillingByIdCard/:idCard', getEfillingByIdCardController);
router.get('/getEfillingPhoto/:idCard', getEfillingPhotoController);

module.exports = router;