const express = require('express');
const { subscribe } = require('../controllers/subscriberController');

const router = express.Router();

router.post('/subscribers', subscribe);

module.exports = router;