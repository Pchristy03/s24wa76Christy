var express = require('express');
const { compile } = require('pug');
var router = express.Router();

/* GET computation. */
router.get('/:value?', function(req, res, next) {

  if (req.params.value) {
    float = parseFloat(req.params.value)
  } else {
  float = Math.random() * (50 - 1) + 1;
  }
  computed = Math.ceil(float)
  res.send(`Math.ceil applied to ${float} is ${computed}`);
});

module.exports = router;
