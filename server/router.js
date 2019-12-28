// imports
const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static(path.join(__dirname, '../client/build')));


router.get('*', (req,res) => {
    res.sendFile("client/build/index.html", {root: '../'});
});

module.exports  = router