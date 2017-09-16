var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'AllDongles.com - All the best dongles for your macbook'
  });
});

router.get('/semantic', function(req, res, next) {
    res.render('semantic', {
        title: 'AllDongles.com - All the best dongles for your macbook'
    });
});


module.exports = router;
