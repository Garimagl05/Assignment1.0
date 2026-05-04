const express = require('express');
const router = express.Router();
const controller = require('../controllers/inventoryController');
router.get('/getdetails', controller.getdetails);
module.exports = router;