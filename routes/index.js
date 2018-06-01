var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/jobs', function(req, res, next) {
  var jobs = [{
    id: 1,
    name: 'Kill Bill'
  }]
  res.send({ jobs: jobs })
})

module.exports = router;
