const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const fetch = require('node-fetch');
const PORT = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
 console.log(__dirname);
 console.log(`listening on ${PORT}`);
});
