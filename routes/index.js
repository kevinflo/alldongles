var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'AllDongles.com - Best dongles for all your devices - MacBook Pro iPhone Android Samsung'
  });
});

router.get('/semantic', function(req, res, next) {
    res.render('semantic', {
        title: 'AllDongles.com - Best dongles for all your devices - MacBook Pro iPhone Android Samsung'
    });
});


module.exports = router;
