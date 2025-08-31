const express = require('express');
const router = express.Router();

router.get('/service1', (req, res) => {
    res.json({ message: 'Đây là dịch vụ 1.' });
});

module.exports = router;
