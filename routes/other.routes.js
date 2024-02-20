const express = require('express');
const router = express.Router();

const otherController = require('../controllers/other');
const controller = require('../controllers/menu');

router.get("/", otherController.asd);
router.get('/menu/:id', controller.detalleMenu)

module.exports = router;