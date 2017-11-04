// 'use strict';

const express = require('express');
const PORT = 3000 || process.env.PORT;
const path = require('path');

var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT} `);
});