// imports
const express = require('express');
const path = require('path');
const router = express.Router();
express.static(path.join(__dirname, '../client/public'))

router.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, "../client", 'public','index.html'))
});

module.exports  = router