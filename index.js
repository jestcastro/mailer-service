console.log('initializing...')
const express = require('express');
const app = express();
app.get('/express', (req, res) => {
    res.send({ hi: 'there' });
})
const PORT = process.env.PORT || 5000; //ENVIRONMENT VARIABLE FOR PORT
app.listen(PORT);
console.log(`App running on :${PORT}`);