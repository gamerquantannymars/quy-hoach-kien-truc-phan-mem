const express = require('express');
const service1 = require('./services/service1');
const service2 = require('./services/service2');

const router = express.Router();

router.use('/api', service1);
router.use('/api', service2);

module.exports = router;
