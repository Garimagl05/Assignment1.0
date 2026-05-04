const express = require('express');
const router = express.Router();

const controller = require('../controllers/deviceController');

router.get('/deviceConfigNotification', controller.deviceConfigNotification);

module.exports = router;