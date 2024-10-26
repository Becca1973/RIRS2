const express = require('express');
const ItemController = require('../controllers/itemController');

const router = express.Router();

router.get('/', ItemController.getItems);         
router.post('/', ItemController.createItem);     

module.exports = router;