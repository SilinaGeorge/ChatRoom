// imports
const express = require('express');
const path = require('path');
const router = express.Router();
express.static(path.join(__dirname, '../client/public'))

router.get('/', (req,res) => {
    fs.access(path.join(__dirname, '../client/public'), function(err) {
        if (err && err.code === 'ENOENT') {
          console.log('not found')
        }
        console.log('found')
      });

    res.sendFile("index.html", {root: '../client/public'});
});

module.exports  = router