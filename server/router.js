// imports
const express = require('express');
const path = require('path');
const router = express.Router();
express.static(path.join(__dirname, '../client/public'))

router.get('/', (req,res) => {
    console.log(path.join(__dirname, '../').toString())
    res.sendFile("index.html", {root: '../'});
});

module.exports  = router