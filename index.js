const express = require('express');
const app = express();
app.get('/express', (req, res) => {
    res.send({ hi: 'there' });
})
app.listen(5000);