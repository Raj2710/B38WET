var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/get-all', function(req, res, next) {
  res.send({message:"You are in Dashboard route"});
});

module.exports = router;
