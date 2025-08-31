const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Chào mừng bạn đến với ứng dụng quy hoạch kiến trúc phần mềm!');
});

app.listen(port, () => {
    console.log(`Ứng dụng đang chạy trên http://localhost:${port}`);
});
