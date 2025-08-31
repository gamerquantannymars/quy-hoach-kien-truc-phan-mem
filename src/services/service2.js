const express = require('express');
const router = express.Router();

router.get('/service2', (req, res) => {
    res.json({ message: 'Đây là dịch vụ 2.' });
});

module.exports = router;
