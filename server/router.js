// imports
const express = require('express');
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname, '../client/public'));

router.get('/', (req,res) => {
    res.sendFile("index.html", {root: '../client/public'});
});

module.exports  = router