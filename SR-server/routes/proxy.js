var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var url = decodeURIComponent(req.body.url);
  var data = req.body.params;

  var options = {
    uri: url,
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Host': '/aws-nodejs-sample/json/foodRecord.json',
      'Referer': '',
      'Cookie': ''},
    form: data
  };

  request(options, function(error , response, body){
      console.log('body:',body);
      try {
        res.json(JSON.parse(body));
      }catch(e){
        res.json({});
      }
      
  });

  // res.send('respond with a resource');
});

module.exports = router;
